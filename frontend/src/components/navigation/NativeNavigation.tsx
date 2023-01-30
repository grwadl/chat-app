import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ChatScreen from "../../../screens/ChatScreen";
import HomeScreen from "../../../screens/HomeScreen";
import { RootStackParamList } from "./types";

type Props = {};

const NativeNavigation = (props: Props) => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chats" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NativeNavigation;
