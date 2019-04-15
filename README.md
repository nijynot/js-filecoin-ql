# filecoin-ql
> Serverless GraphQL client for Filecoin

## Install
```
npm install filecoin-ql
```

## Usage
```js
const Filecoin = require('filecoin-api-client');
const FilecoinQL = require('./src/index');

const fc = Filecoin({ apiAddr: '/ip4/127.0.0.1/tcp/3453/http' });
const fcql = FilecoinQL({ client: fc });

const query = `query($height: Int) {
  chain(height: $height) {
    height
  }
}`;
const variables = { height: 25298 };

fcql({ query, variables }).then((res) => {
  console.log(res);
});
```

## API
[GraphQL schema](src/schema/schema.graphql)

* actor.ls
* **address.default** ✔
* address.lookup
* **address.ls** ✔
* address.new
* **bootstrap.ls** ✔
* **chain.head** ✔
* **chain.ls** ✔
* client.cat
* client.import
* client.listAsks
* client.payments
* client.proposeStorageDeal
* client.queryStorageDeal
* config.get
* config.set
* dag.get
* **dht.findPeer** ✔
* dht.findProvs
* dht.query
* id
* **log.level** ✔
* **log.ls** ✔
* log.tail
* message.send
* message.status
* message.wait
* miner.addAsk
* miner.create
* miner.owner
* miner.pledge
* miner.power
* miner.setPrice
* miner.updatePeerId
* mining.once
* mining.start
* mining.stop
* mpool.ls
* mpool.rm
* mpool.show
* paych.close
* paych.create
* paych.extend
* paych.ls
* paych.reclaim
* paych.redeem
* paych.voucher
* ping
* retrievalClient.retrievePiece
* **show.block** ✔
* **stats.bandwidth** ✔
* swarm.connect
* swarm.peers
* **version** ✔
* **wallet.balance** ✔
* wallet.export
* wallet.import

## Related
[js-filecoin-api-client](https://github.com/filecoin-project/js-filecoin-api-client)

## License
MIT
