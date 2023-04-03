import { request } from "@strapi/helper-plugin";

function convertToQueryParams(obj, parentKey = null) {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof value === "object" && value !== null) {
      const subParams = convertToQueryParams(value, newKey);
      return { ...acc, ...subParams };
    } else {
      return { ...acc, [newKey]: value };
    }
  }, {});
}

export const api = {
  readAllVehicles: async ({ filter }) => {
    return await request("/vehicle/read", {
      method: "GET",
      params: convertToQueryParams(filter),
    });
  },
  readVehicleById: async (id) => {
    return await request(`/vehicle/read/${id}`, {
      method: "GET",
    });
  },
  readAllContracts: async ({ filter }) => {
    return await request("/contract/read", {
      method: "GET",
      params: convertToQueryParams(filter),
    });
  },
};
