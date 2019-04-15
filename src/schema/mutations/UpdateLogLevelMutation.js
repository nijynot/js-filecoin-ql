const {
  GraphQLString,
  GraphQLInputObjectType,
} = require('graphql');

const UpdateLogLevelInput = new GraphQLInputObjectType({
  name: 'UpdateLogLevelInput',
  fields: () => ({
    level: { type: GraphQLString },
  }),
});

const UpdateLogLevelMutation = {
  type: GraphQLString,
  args: {
    input: {
      type: UpdateLogLevelInput,
    },
  },
  resolve: async (req, { input }, context) => {
    return context.filecoin.log.level(input.level);
  },
};

module.exports = {
  UpdateLogLevelInput,
  UpdateLogLevelMutation,
};
