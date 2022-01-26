"use strict";
const Api = require("claudia-api-builder");
const api = new Api();

const getPizzas = require("./handlers/get-menu");
const createOrder = require("./handlers/create-order");
const updateOrder = require("./handlers/update-order");
const deleteOrder = require("./handlers/delete-order");

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

api.put(
  "/orders/{id}",
  (request) => {
    return updateOrder({ order: request.body, orderId: request.pathParams.id });
  },
  { error: 400 }
);

api.delete(
  "/orders/{id}",
  (request) => {
    return deleteOrder(request.pathParams.id);
  },
  { error: 400 }
);

module.exports = api;
