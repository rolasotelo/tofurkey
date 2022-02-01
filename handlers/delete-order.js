const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

function deleteOrder(orderId) {
  if (!orderId)
    throw new Error("To delete an order please provide a valid orderId");

  return docClient
    .delete({
      TableName: "dinner-orders",
      Key: {
        orderId: orderId,
      },
    })
    .promise()
    .then((res) => {
      console.log("Order was deleted!", res);
      return res;
    })
    .catch((saveError) => {
      console.log("Ops order was not deleted :(", saveError);
      throw saveError;
    });
}

module.exports = deleteOrder;
