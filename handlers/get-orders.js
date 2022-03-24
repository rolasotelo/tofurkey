const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

function getOrders(orderId, status) {
  if (orderId === null) {
    return docClient
      .scan({
        TableName: 'dinner-orders',
        FilterExpression: 'orderStatus = :s',
        ExpressionAttributeValues: {
          ':s': status || 'pending',
        },
      })
      .promise()
      .then((result) => result.Items);
  }

  return docClient
    .get({
      TableName: 'dinner-orders',
      Key: {
        orderId,
      },
    })
    .promise()
    .then((result) => result.Item);
}

module.exports = getOrders;
