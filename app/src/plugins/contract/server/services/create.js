"use strict";

module.exports = ({ strapi }) => ({
  async createContract(data) {
    const { id } = await strapi.entityService.create(
      "plugin::contract.contract",
      {
        data,
      }
    );
    return { id };
  },
});
