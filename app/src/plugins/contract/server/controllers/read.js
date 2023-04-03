"use strict";

module.exports = ({ strapi }) => ({
  async index(ctx) {
    try {
      const { query } = ctx.request;

      const contracts = await strapi
        .plugin("contract")
        .service("read")
        .getAllContracts(query);

      ctx.body = contracts;
    } catch (err) {
      console.log(err);
    }
  },
});
