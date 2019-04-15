const { GraphQLObjectType } = require('graphql');

const { registerType } = require('../definitions/node');
const { UpdateLogLevelMutation } = require('../mutations/UpdateLogLevelMutation');

const MutationType = registerType(
  new GraphQLObjectType({
    name: 'Mutation',
    description: 'Mutations that can be called from this schema.',
    fields: () => ({
      updateLogLevelMutation: UpdateLogLevelMutation,
    }),
  })
);

module.exports = MutationType;
