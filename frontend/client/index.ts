import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://192.168.0.106:4000/graphql',
  }),
  cache: new InMemoryCache(),
})
