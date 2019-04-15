const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
} = require('graphql');

const { registerType } = require('../definitions/node');
const CIDType = require('./CIDType');
const MeteredMessageType = require('./MeteredMessageType');

const BlockType = registerType(
  new GraphQLObjectType({
    name: 'Block',
    fields: () => ({
      miner: {
        type: new GraphQLNonNull(GraphQLString),
      },
      parents: {
        type: new GraphQLNonNull(new GraphQLList(CIDType)),
      },
      parentWeight: {
        type: GraphQLInt,
      },
      height: {
        type: GraphQLInt,
      },
      nonce: {
        type: GraphQLInt,
      },
      stateRoot: {
        type: CIDType,
      },
      proof: {
        type: new GraphQLNonNull(new GraphQLList(GraphQLInt)),
      },
      messages: {
        type: new GraphQLList(MeteredMessageType),
      }
    }),
  })
);

module.exports = BlockType;
