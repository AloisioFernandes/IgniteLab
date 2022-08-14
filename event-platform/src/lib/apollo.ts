import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl6twuz1r1uw401um8pllevll/master',
  cache: new InMemoryCache()
})