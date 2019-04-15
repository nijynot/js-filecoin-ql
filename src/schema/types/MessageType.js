const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const { registerType } = require('../definitions/node');

const MessageType = registerType(
  new GraphQLObjectType({
    name: 'Message',
    description: 'Message',
    fields: () => ({
      to: {
        type: GraphQLString,
      },
      from: {
        type: GraphQLString,
      },
      nonce: {
        type: GraphQLInt,
      },
      value: {
        type: GraphQLString,
      },
      method: {
        type: GraphQLString,
      },
      params: {
        type: GraphQLString,
      },
    }),
  })
);

module.exports = MessageType;
