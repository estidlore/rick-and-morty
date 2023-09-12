import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://rickandmortyapi.com/graphql",
});

const GraphQLProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export { GraphQLProvider };
