const Api = require('claudia-api-builder');

const api = new Api();

const getPizzas = require('./handlers/get-menu');
const createOrder = require('./handlers/create-order');
const getOrders = require('./handlers/get-orders');
const updateOrder = require('./handlers/update-order');
const deleteOrder = require('./handlers/delete-order');

api.get('/', () => 'Welcome to Tofurkey API');

api.get('/menu', () => getPizzas());

api.get(
  '/menu/{id}',
  (request) => getPizzas(request.pathParams.id),
  { error: 404 },
);

api.get(
  '/orders',
  () => getOrders(),
  { error: 404 },
);

api.get(
  '/orders/{id}',
  (request) => getOrders(request.pathParams.id),
  { error: 404 },
);

api.post(
  '/orders',
  (request) => createOrder(request.body),
  { success: 201, error: 400 },
);

api.put(
  '/orders/{id}',
  (request) => updateOrder({ order: request.body, orderId: request.pathParams.id }),
  { error: 400 },
);

api.delete(
  '/orders/{id}',
  (request) => deleteOrder(request.pathParams.id),
  { error: 400 },
);

module.exports = api;
