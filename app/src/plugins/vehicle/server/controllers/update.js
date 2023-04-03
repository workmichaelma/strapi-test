"use strict";

module.exports = ({ strapi }) => ({
  async updateVehicleById(ctx) {
    const { body } = ctx.request;
    const { id } = ctx.params;

    const result = await strapi
      .plugin("vehicle")
      .service("update")
      .updateVehicleById(body.editedFields, id);

    ctx.body = {
      success: true,
      id: result.id,
    };
  },
});
