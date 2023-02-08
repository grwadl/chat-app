import ChatScreen from "@/screens/ChatScreen";
import LogInScreen from "@/screens/LogInScreen";
import SignUpScreen from "@/screens/SignUpScreen";
import React from "react";
import { Text } from "react-native";
import { useAuth } from "./hooks/useAuth";
import { Stack } from "./stack";

const Routes = () => {
  const { isLogined, loading } = useAuth();

  if (loading) return <Text>Loading</Text>;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLogined ? (
        <>
          <Stack.Screen name="Chats" component={ChatScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LogInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Routes;
