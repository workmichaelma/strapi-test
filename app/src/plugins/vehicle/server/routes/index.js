module.exports = [
  {
    method: "GET",
    path: "/",
    handler: "myController.index",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/read",
    handler: "read.index",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/read/:id",
    handler: "read.getVehicleById",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "POST",
    path: "/create",
    handler: "create.index",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/read/vehicle/colors",
    handler: "read.getAllVehicleColors",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "PUT",
    path: "/update/vehicle/:id",
    handler: "update.updateVehicleById",
    config: {
      policies: [],
      auth: false,
    },
  },
];
