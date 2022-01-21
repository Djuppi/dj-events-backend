// PATH: ./src/api/[content-type]/controllers/[content-type].js
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
"use strict";

 
/**
 *  event controller
 */
 
const { createCoreController } = require("@strapi/strapi").factories;
 
module.exports = createCoreController("api::event.event", ({ strapi }) => ({

  // Create event with linked user
  async create(ctx) {

    let entity;
    const { user } = ctx.state;

    if(!user) {
      return ctx.badRequest(null, [{messages: [{ id: "No authorization header was found" }]}]);
    }

    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      data.user = ctx.state.user.id;
      entity = await super.create(ctx);
    } else {
      ctx.request.body.data.users = user.id;
      entity = await super.create(ctx);
    }

    return entity;
  },

  // Update user event
  async update(ctx) {
    const { id } = ctx.params;

    const { events } = await this.me(ctx);
    let entity;
    const isOwnedevent = events.some(el => el.id == id);

    if (!isOwnedevent) {
      return ctx.unauthorized(`You can't update this entry`, {thisMessage: "You don't own it"});
    }

    if (ctx.is('multipart')) {
      entity = await super.update(ctx);
    } else {
      entity = await super.update(ctx);
    }

    return entity;
  },

   // Delete a user event
   async delete(ctx) {
    const { id } = ctx.params;


    const { events } = await this.me(ctx)

    const isOwnedevent = events.some(el => el.id == id);

    if (!isOwnedevent) {
      return ctx.unauthorized(`You can't delete this entry`, {thisMessage: "You don't own it"});
    }

    const entity = await super.delete(ctx);
    return entity;
  },

  // Get logged in users with events
  async me(ctx) {
    const user = await strapi.plugins[
      'users-permissions'
    ].services.jwt.getToken(ctx);

    if(!user) {
      return ctx.badRequest(null, [{messages: [{ id: "No authorization header was found" }]}]);
    }

    const { id } = user;

    const data = await strapi
      .query('plugin::users-permissions.user')
      .findOne({ where: { id }, populate: ['role', 'events'] });
    if(!data) {
      ctx.notFound();
    }

    return {user: { username: data.username, email: data.email }, events: data.events};
  },
  
  // Populate everything on get events
  async find(ctx) {
    ctx.query = { ...ctx.query, populate: '*' }
  
    // Calling the default core action
    const { data, meta } = await super.find(ctx);


    return { data, meta };
  }
}));