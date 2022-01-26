function deleteOrder(orderId) {
  if (!orderId)
    throw new Error("To delete an order please provide a valid orderId");

  return { message: `Order ${orderId} deleted.` };
}

module.exports = deleteOrder;
