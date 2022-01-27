const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

function createOrder(order) {
  if (!order || !order.itemId || !order.address)
    throw new Error(
      "To order your dinner please provide the item and address where it should be delivered."
    );

  return docClient
    .put({
      TableName: "dinner-orders",
      Item: {
        orderId: "some-id",
        item: order.itemId,
        address: order.address,
        orderStatus: "pending",
      },
    })
    .promise()
    .then((res) => {
      console.log("Order is saved!", res);
      return res;
    })
    .catch((saveError) => {
      console.log("Ops order is not saved :(", saveError);
      throw saveError;
    });
}

module.exports = createOrder;
