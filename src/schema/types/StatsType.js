const {
  GraphQLObjectType,
  GraphQLInt,
} = require('graphql');

const { registerType } = require('../definitions/node');

const StatsType = registerType(
  new GraphQLObjectType({
    name: 'Stats',
    description: 'Stats shows bandwidth usage statistics.',
    fields: () => ({
      totalIn: {
        type: GraphQLInt,
      },
      totalOut: {
        type: GraphQLInt,
      },
      rateIn: {
        type: GraphQLInt,
      },
      rateOut: {
        type: GraphQLInt,
      },
    }),
  })
);

module.exports = StatsType;
