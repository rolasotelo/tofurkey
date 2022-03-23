const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const docClient = new AWS.DynamoDB.DocumentClient();

function createOrder(order) {
  if (!order || !order.itemId || !order.address) {
    throw new Error(
      'To order your dinner please provide the item and address where it should be delivered.',
    );
  }

  return docClient
    .put({
      TableName: 'dinner-orders',
      Item: {
        orderId: uuidv4(),
        item: order.itemId,
        address: order.address,
        orderStatus: 'pending',
      },
    })
    .promise()
    .then((res) => res)
    .catch((saveError) => {
      throw saveError;
    });
}

module.exports = createOrder;
