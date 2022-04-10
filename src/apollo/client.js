import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://mainnet-graph.oneledger.network/subgraphs/name/moonba-co/dex-subgraph-oneledger',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://mainnet-graph.oneledger.network/index-node/graphql',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

// NOTE: Not implemented
export const stakingClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://mainnet-graph.oneledger.network/subgraphs/name/way2rach/talisman',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://mainnet-graph.oneledger.network/subgraphs/name/blocklytics/oneledger-blocks-test',
  }),
  cache: new InMemoryCache(),
})
