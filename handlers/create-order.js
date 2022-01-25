function createOrder(order) {
  if (!order || !order.itemId || !order.address)
    throw new Error(
      "To order your dinner please provide the item and address where it should be delivered."
    );

  return {};
}

module.exports = createOrder;
