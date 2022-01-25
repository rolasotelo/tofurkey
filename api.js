"use strict";
const Api = require("claudia-api-builder");
const api = new Api();

const getPizzas = require("./handlers/get-menu");
const createOrder = require("./handlers/create-order");

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

api.post(
  "/orders",
  (request) => {
    return createOrder(request.body);
  },
  { success: 201, error: 400 }
);

module.exports = api;
