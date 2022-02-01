const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

function updateOrder({ order, orderId }) {
  if (!order || !orderId)
    throw new Error(
      "To update your dinner please provide the orderId and updated order."
    );

  return docClient
    .update({
      TableName: "dinner-orders",
      Key: {
        orderId: orderId,
      },
      UpdateExpression: "set pizza = :p, address = :a",
      ExpressionAttributeValues: {
        ":p": order.itemId,
        ":a": order.address,
      },
      ReturnValues: "ALL_NEW",
    })
    .promise()
    .then((res) => {
      console.log("Order is updated!", res);
      return res.Attributes;
    })
    .catch((updateError) => {
      console.log("Ops order is not updated :(", updateError);
      throw updateError;
    });
}

module.exports = updateOrder;
