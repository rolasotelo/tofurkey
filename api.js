const Api = require("claudia-api-builder");
const getPizzas = require("./handlers/get-menu");
const api = new Api();

api.get("/", () => {
  return "Welcome to Tofurkey API";
});

api.get("/menu", () => {
  return getPizzas();
});

api.get(
  "/menu/{id}",
  (request) => {
    return getPizzas(request.pathParams.id);
  },
  { error: 404 }
);

module.exports = api;
