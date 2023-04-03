"use strict";

module.exports = ({ strapi }) => ({
  async updateVehicleById(data, id) {
    const result = await strapi.entityService.update(
      "plugin::vehicle.vehicle",
      id,
      { data }
    );
    return { id: result.id };
  },
});
