const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

function updateOrder({ order, orderId }) {
  if (!order || !orderId)
    throw new Error(
      "To update your dinner please provide the orderId and updated order."
    );

  return docClient
    .put({
      TableName: "dinner-orders",
      Item: {
        orderId: orderId,
        item: order.itemId,
        address: order.address,
        orderStatus: "pending",
      },
    })
    .promise()
    .then((res) => {
      console.log("Order was updated!", res);
      return res;
    })
    .catch((saveError) => {
      console.log("Ops order was not updated :(", saveError);
      throw saveError;
    });
}

module.exports = updateOrder;
