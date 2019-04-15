const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const CID = require('cids');

function coerceCID(value) {
  if (CID.isCID(value)) {
    return value.toString();
  }

  return null;
}

const CIDScalarType = new GraphQLScalarType({
  name: 'CIDScalar',
  description: 'CID as a GraphQLScalarType.',
  serialize(value) {
    return coerceCID(value);
  },
  parseValue(value) {
    try {
      const cid = new CID(value);
      return cid;
    } catch (e) {
      return null;
    }
  },
  parseLiteral(valueAST) {
    if (valueAST.kind !== Kind.STRING) {
      return null;
    }

    try {
      const cid = new CID(valueAST.value);
      return cid;
    } catch (e) {
      return null;
    }
  },
});

module.exports = CIDScalarType;
