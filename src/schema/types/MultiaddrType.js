const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

const { registerType } = require('../definitions/node');

const MultiaddrType = registerType(
  new GraphQLObjectType({
    name: 'Multiaddr',
    description: 'Multiaddr is a standard way to represent addresses.',
    fields: () => ({
      multiaddr: {
        type: GraphQLString,
        resolve: (rootValue) => {
          return rootValue.toString();
        },
      },
    }),
  })
);

module.exports = MultiaddrType;
