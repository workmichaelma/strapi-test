"use strict";

module.exports = ({ strapi }) => ({
  async updateContractById(ctx) {
    const { body } = ctx.request;
    const { id } = ctx.params;

    const result = await strapi
      .plugin("contract")
      .service("update")
      .updateContractById(body.editedFields, id);

    ctx.body = {
      success: true,
      id: result.id,
    };
  },
});
