function updateOrder({ order, orderId }) {
  if (!order || !orderId)
    throw new Error(
      "To update your dinner please provide the orderId and updated order."
    );

  return { message: `Updated order ${orderId}` };
}

module.exports = updateOrder;
