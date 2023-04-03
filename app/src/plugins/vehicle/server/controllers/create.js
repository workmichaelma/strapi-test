"use strict";

module.exports = ({ strapi }) => ({
  async index(ctx) {
    try {
      const { body } = ctx.request;

      if (body.vehicle) {
        const result = await strapi
          .plugin("vehicle")
          .service("create")
          .createVehicle(body.vehicle);
        ctx.body = {
          ...result,
          success: true,
        };
      } else {
        ctx.body = {
          success: false,
          body: "NO DATA FOUND",
        };
      }

      console.log({ body });
    } catch (err) {
      console.log(err);
    }
  },
});
