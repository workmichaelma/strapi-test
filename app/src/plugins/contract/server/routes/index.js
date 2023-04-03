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
];
