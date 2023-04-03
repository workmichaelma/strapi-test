"use strict";

module.exports = ({ strapi }) => ({
  async index(ctx) {
    try {
      const { body } = ctx.request;

      if (body.contract) {
        const result = await strapi
          .plugin("contract")
          .service("create")
          .createVehicle(body.contract);
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
