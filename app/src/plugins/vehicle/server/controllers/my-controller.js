'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('vehicle')
      .service('myService')
      .getWelcomeMessage();
  },
});
