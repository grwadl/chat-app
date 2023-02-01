import ChatScreen from "@/screens/ChatScreen";
import LogInScreen from "@/screens/LogInScreen";
import SignUpScreen from "@/screens/SignUpScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useAuth } from "../navigation/hooks/useAuth";
import { RootStackParamList } from "../navigation/types";

const Routes = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const { isLogined, setShouldTrigger } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLogined ? (
        <>
          <Stack.Screen name="Chats" component={ChatScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login">
            {(props) => <LogInScreen {...props} refetch={setShouldTrigger} />}
          </Stack.Screen>
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Routes;
