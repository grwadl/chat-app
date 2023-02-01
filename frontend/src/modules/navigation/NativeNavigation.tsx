import { client } from "@/graphql/client";
import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Routes from "../auth/Routes";

const NativeNavigation = () => {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </NavigationContainer>
  );
};

export { NativeNavigation };
