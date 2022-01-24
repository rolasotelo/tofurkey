const Api = require("claudia-api-builder");
const api = new Api();

api.get("/menu", () => {
  return [
    "Tofurkey",
    "Sandia Glaseada",
    "Calamar Empanizado",
    "Hamburguesas BBQ",
  ];
});

module.exports = api;
