import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ChatScreen from "../../../screens/ChatScreen";
import HomeScreen from "../../../screens/HomeScreen";
import { RootStackParamList } from "./types";

type Props = {
  isLogined: boolean;
};

const NativeNavigation = ({ isLogined }: Props) => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const client = new ApolloClient({
    link: createHttpLink({
      uri: "http://192.168.0.109:4000/graphql",
    }),
    cache: new InMemoryCache(),
  });

  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isLogined ? (
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Chats" component={ChatScreen} />
            </>
          ) : (
            <></>
          )}
        </Stack.Navigator>
      </ApolloProvider>
    </NavigationContainer>
  );
};

export { NativeNavigation };
