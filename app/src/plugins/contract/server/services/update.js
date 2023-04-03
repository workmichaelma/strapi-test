"use strict";

module.exports = ({ strapi }) => ({
  async updateContractById(data, id) {
    const result = await strapi.entityService.update(
      "plugin::contract.contract",
      id,
      { data }
    );
    return { id: result.id };
  },
});
