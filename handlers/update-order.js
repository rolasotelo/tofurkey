const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

function updateOrder({ order, orderId }) {
  if (!order || !orderId) {
    throw new Error(
      'To update your dinner please provide the orderId and updated order.',
    );
  }

  return docClient
    .update({
      TableName: 'dinner-orders',
      Key: {
        orderId,
      },
      UpdateExpression: 'set itemId = :p, address = :a',
      ConditionExpression: 'orderStatus = :s',
      ExpressionAttributeValues: {
        ':p': order.itemId,
        ':a': order.address,
        ':s': 'pending',
      },
      ReturnValues: 'ALL_NEW',
    })
    .promise()
    .then((res) => res.Attributes)
    .catch((updateError) => {
      throw updateError;
    });
}

module.exports = updateOrder;
