import { writeToStorage } from "@/lib/storage";
import { userAuthVar } from "@/src/modules/auth/hooks/useAuth";
import { useLoginMutation } from "@/src/modules/auth/hooks/useLoginMutation";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Text, TextInput } from "react-native";
import Container from "../src/components/base/Container";
import SafeAreaViewCrossPlatform from "../src/components/base/SafeAreaView";
import MyButton from "../src/components/button";
import { RootStackParamList } from "../src/modules/navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LogInScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logInUser } = useLoginMutation();

  const logIn = async () => {
    if (!email) return;

    const { data, errors } = await logInUser({
      variables: {
        userInfo: {
          email,
          password,
        },
      },
    });

    if (!data || errors) return;

    await writeToStorage("auth-token", data?.login.token ?? "");
    userAuthVar({ ...data?.login, isLogined: true });
  };

  return (
    <SafeAreaViewCrossPlatform>
      <Container>
        <Text className="font-mont text-2xl">Log in</Text>
        <TextInput
          value={email}
          placeholder="Email..."
          onChangeText={(text) => setEmail(text)}
          className="border  border-gray-200 rounded-md p-2 mt-4 text-lg"
        />
        <TextInput
          value={password}
          placeholder="Password..."
          onChangeText={(text) => setPassword(text)}
          className="border  border-gray-200 rounded-md p-2 mt-10 mb-4 text-lg"
        />
        <MyButton
          style={{ marginTop: 20 }}
          onPress={logIn}
          className="px-6 py-3 rounded-lg flex items-center"
        >
          <Text className="text-xl text-white">Log in</Text>
        </MyButton>
        <Text
          className="text-xl mt-5 block text-center"
          onPress={() => navigation.navigate("SignUp")}
        >
          Doesn't have an account?
        </Text>
      </Container>
    </SafeAreaViewCrossPlatform>
  );
};

export default LogInScreen;
