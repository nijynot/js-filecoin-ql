const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require('graphql');

const { registerType } = require('../definitions/node');

const CIDType = registerType(
  new GraphQLObjectType({
    name: 'CID',
    description: 'CID is a self-describing content-addressed identifier.',
    fields: () => ({
      version: {
        type: new GraphQLNonNull(GraphQLInt),
        resolve: rootValue => rootValue.version,
      },
      codec: {
        type: new GraphQLNonNull(GraphQLString),
        resolve: rootValue => rootValue.codec,
      },
      multibaseName: {
        type: new GraphQLNonNull(GraphQLString),
        resolve: rootValue => rootValue.multibaseName,
      },
      multihash: {
        type: new GraphQLNonNull(GraphQLString),
        resolve: rootValue => rootValue.toBaseEncodedString(),
      }
    }),
  })
);

module.exports = CIDType;
