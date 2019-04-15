const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const { registerType } = require('../definitions/node');
const MessageType = require('./MessageType');

const MeteredMessageType = registerType(
  new GraphQLObjectType({
    name: 'MeteredMessage',
    description: 'Wrapper type of Message that includes additional information.',
    fields: () => ({
      message: {
        type: MessageType,
        resolve: rootValue => rootValue.meteredMessage.message,
      },
      gasPrice: {
        type: GraphQLInt,
        resolve: rootValue => rootValue.meteredMessage.gasPrice,
      },
      gasLimit: {
        type: GraphQLInt,
        resolve: rootValue => rootValue.meteredMessage.gasLimit,
      },
      signature: {
        type: GraphQLString,
      },
    }),
  })
);

module.exports = MeteredMessageType;
