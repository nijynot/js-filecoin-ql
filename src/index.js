
const { graphql } = require('graphql');
const schema = require('./schema/schema');

module.exports = (config) => {
  if (typeof config !== 'object') {
    throw new TypeError(`FilecoinQL expected an Object but got: ${config}`);
  }

  return (c) => {
    return graphql(
      schema,
      c.query,
      c.rootValue,
      { filecoin: config.client },
      c.variables,
      c.operationName
    );
  };
};
