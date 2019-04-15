const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
} = require('graphql');

const BlockType = require('./BlockType');
const CIDScalarType = require('./CIDScalarType');
const MultiaddrType = require('./MultiaddrType');
const AddressType = require('./AddressType');
const StatsType = require('./StatsType');

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    block: {
      type: new GraphQLNonNull(BlockType),
      args: {
        cid: { type: new GraphQLNonNull(CIDScalarType) },
      },
      resolve: (_, args, context) => {
        return context.filecoin.show.block(args.cid);
      },
    },
    chain: {
      type: new GraphQLList(BlockType),
      args: {
        height: { type: GraphQLInt },
      },
      resolve: async (_, args, context) => {
        for await (const block of context.filecoin.chain.ls()) {
          if (args.height === parseInt(block[0].height, 10)) {
            return block;
          } else if (args.height > parseInt(block[0].height, 10)) {
            return null;
          }
        }
      },
    },
    defaultAddress: {
      type: AddressType,
      resolve: (_, args, context) => {
        return context.filecoin.address.default();
      },
    },
    wallet: {
      type: new GraphQLList(AddressType),
      resolve: (_, args, context) => {
        return context.filecoin.address.ls();
      },
    },
    bootstrap: {
      type: new GraphQLList(MultiaddrType),
      resolve: (_, args, context) => {
        return context.filecoin.bootstrap.ls();
      },
    },
    version: {
      type: GraphQLString,
      resolve: (_, args, context) => {
        return context.filecoin.version().then((res) => res.commit);
      },
    },
    peer: {
      type: new GraphQLList(MultiaddrType),
      args: {
        id: { type: GraphQLString },
      },
      resolve: async (_, args, context) => {
        const addrs = [];
        for await (const addr of context.filecoin.dht.findPeer(args.id)) {
          addrs.push(addr);
        }
        return addrs;
      },
    },
    log: {
      type: new GraphQLList(GraphQLString),
      resolve: (_, args, context) => {
        return context.filecoin.logs.ls();
      },
    },
    stats: {
      type: StatsType,
      resolve: (_, args, context) => {
        return context.filecoin.stats.bandwidth();
      },
    },
  }),
});

module.exports = QueryType;
