"use strict";

module.exports = ({ strapi }) => ({
  async getAllVehicles(query) {
    const sort =
      query["orderBy.field"] && query["orderBy.order"]
        ? {
            [query["orderBy.field"]]: query["orderBy.order"],
          }
        : {};
    let filters = {};
    const filterBy = [];
    if (query["filterBy.color"]) {
      filterBy.push({
        color: {
          $contains: query["filterBy.color"],
        },
      });
    }
    if (query["filterBy.name"]) {
      filterBy.push({
        name: {
          $contains: query["filterBy.name"],
        },
      });
    }

    if (filterBy) {
      filters = {
        $and: filterBy,
      };
    }
    return await strapi.entityService.findMany("plugin::vehicle.vehicle", {
      sort,
      filters,
      populate: {
        contracts: {
          fields: ["id", "name", "startDate"],
          populate: {
            vehicles: {
              fields: ["id", "name", "color"],
            },
          },
        },
        current_contract: {
          fields: ["id", "name", "startDate"],
          populate: {
            vehicles: {
              fields: ["id", "name", "color"],
            },
          },
        },
      },
    });
  },
  async getAllVehicleColors() {
    const colors = await strapi.entityService.findMany(
      "plugin::vehicle.vehicle",
      {
        fields: ["color"],
      }
    );

    return [...new Set(colors.map((item) => item.color))];
  },
  async getVehicleById(id) {
    console.log({ id });
    const vehicle = await strapi.entityService.findOne(
      "plugin::vehicle.vehicle",
      id,
      {
        populate: {
          contracts: {
            fields: ["id", "name", "startDate"],
            populate: {
              vehicles: {
                fields: ["id", "name", "color"],
              },
            },
          },
          current_contract: {
            fields: ["id", "name", "startDate"],
            populate: {
              vehicles: {
                fields: ["id", "name", "color"],
              },
            },
          },
        },
      }
    );
    return vehicle;
  },
});
