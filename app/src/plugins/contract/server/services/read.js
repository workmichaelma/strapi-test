"use strict";

module.exports = ({ strapi }) => ({
  async getAllContracts(query) {
    if (query["orderBy.field"] && query["orderBy.order"]) {
      return await strapi.entityService.findMany("plugin::contract.contract", {
        sort: {
          [query["orderBy.field"]]: query["orderBy.order"],
        },
        populate: {
          vehicles: true,
        },
      });
    }
    return await strapi.entityService.findMany("plugin::contract.contract", {
      populate: {
        vehicles: true,
      },
    });
  },
  async getContractById(id) {
    console.log({ id });
    const contract = await strapi.entityService.findOne(
      "plugin::contract.contract",
      id
    );
    return contract;
  },
});
