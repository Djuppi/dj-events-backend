// PATH: ./src/api/[content-type]/controllers/[content-type].js

"use strict";

 
/**
 *  event controller
 */
 
const { createCoreController } = require("@strapi/strapi").factories;
 
module.exports = createCoreController("api::event.event", ({ strapi }) => ({
    async me(ctx) {
      const user = await strapi.plugins[
        'users-permissions'
      ].services.jwt.getToken(ctx);

      if(!user) {
        return ctx.badRequest(null, [{messages: [{ id: "No authorization header was found" }]}]);
      }

      const data = await strapi.plugins['users-permissions'].services.user.fetchAuthenticatedUser(user.id);

      if(!data.events) {
        ctx.notFound();
      }

      return {user: { username: data.username, email: data.email }, events: data.events};
    },
    async find(ctx) {
      ctx.query = { ...ctx.query, populate: '*' }
    
      // Calling the default core action
      const { data, meta } = await super.find(ctx);

  
      return { data, meta };
    }
}));