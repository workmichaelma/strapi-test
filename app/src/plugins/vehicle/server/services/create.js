"use strict";

module.exports = ({ strapi }) => ({
  async createVehicle(data) {
    const { id } = await strapi.entityService.create(
      "plugin::vehicle.vehicle",
      {
        data,
      }
    );
    return { id };
  },
});
