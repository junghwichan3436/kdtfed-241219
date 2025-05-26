import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(), //캐시값을 언제나 유용하게 사용할 거야
});

export default client;
