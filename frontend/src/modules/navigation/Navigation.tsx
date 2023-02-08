import { client } from "@/client";
import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Routes from "../auth/Routes";

const Navigation = () => {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </NavigationContainer>
  );
};

export { Navigation };
