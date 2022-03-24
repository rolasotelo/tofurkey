const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

function deleteOrder(orderId) {
  if (!orderId) throw new Error('To delete an order please provide a valid orderId');

  return docClient
    .delete({
      TableName: 'dinner-orders',
      Key: {
        orderId,
      },
      ConditionExpression: 'orderStatus = :s',
      ExpressionAttributeValues: {
        ':s': 'pending',
      },
    })
    .promise()
    .then((res) => res)
    .catch((deleteError) => {
      throw deleteError;
    });
}

module.exports = deleteOrder;
