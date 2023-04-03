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
  createVehicle: async (data) => {
    return await request("/vehicle/create", {
      method: "POST",
      body: data,
    });
  },
  readAllVehicleColors: async () => {
    return await request("/vehicle/read/vehicle/colors", {
      method: "GET",
    });
  },
  readVehicleById: async (id) => {
    return await request(`/vehicle/read/${id}`, {
      method: "GET",
    });
  },
  updateVehicle: async (data, id) => {
    return await request(`/vehicle/update/vehicle/${id}`, {
      method: "PUT",
      body: data,
    });
  },
};
