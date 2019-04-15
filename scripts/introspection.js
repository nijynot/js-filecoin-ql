const fs = require('fs');
const { printSchema } = require('graphql');
const schema = require('../src/schema/schema');

fs.writeFile('./src/schema/schema.graphql', printSchema(schema), (err) => {
  if (err) throw new Error(err);
});
