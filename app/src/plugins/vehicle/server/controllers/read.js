"use strict";

module.exports = ({ strapi }) => ({
  async index(ctx) {
    try {
      const { query } = ctx.request;

      const vehicles = await strapi
        .plugin("vehicle")
        .service("read")
        .getAllVehicles(query);

      ctx.body = vehicles;
    } catch (err) {
      console.log(err);
    }
  },
  async getAllVehicleColors(ctx) {
    const colors = await strapi
      .plugin("vehicle")
      .service("read")
      .getAllVehicleColors();

    ctx.body = colors;
  },
  async getVehicleById(ctx) {
    const { id } = ctx.params;
    const vehicle = await strapi
      .plugin("vehicle")
      .service("read")
      .getVehicleById(id);

    ctx.body = vehicle;
  },
});
