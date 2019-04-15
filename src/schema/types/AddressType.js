const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require('graphql');

const { registerType } = require('../definitions/node');

const AddressType = registerType(
  new GraphQLObjectType({
    name: 'Address',
    description: 'Address is a single Filecoin address.',
    fields: () => ({
      address: {
        type: new GraphQLNonNull(GraphQLString),
        resolve: (rootValue) => {
          return rootValue;
        },
      },
      balance: {
        type: new GraphQLNonNull(GraphQLInt),
        resolve: (rootValue, _, context) => {
          return context.filecoin.wallet.balance(rootValue);
        },
      },
    }),
  })
);

module.exports = AddressType;
