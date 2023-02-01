import { User } from "@/entities/user";
import LOGIN_USER from "@/graphql/mutations/login-user";
import { writeToStorage } from "@/lib/storage";
import { useMutation } from "@apollo/client";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Text, TextInput } from "react-native";
import Container from "../src/components/base/Container";
import SafeAreaViewCrossPlatform from "../src/components/base/SafeAreaView";
import MyButton from "../src/components/button";
import { RootStackParamList } from "../src/modules/navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Login"> & {
  refetch: React.Dispatch<React.SetStateAction<boolean>>;
};
type LogInUserPayload = { userInfo: Omit<User, "name"> };
type LogInUserResponse = { login: { user: User; token: string } };

const LogInScreen = ({ navigation, refetch }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logInUser, { error, client }] = useMutation<
    LogInUserResponse,
    LogInUserPayload
  >(LOGIN_USER);

  const logIn = async () => {
    if (!email) return;

    const { data } = await logInUser({
      variables: {
        userInfo: {
          email,
          password,
        },
      },
    });

    await writeToStorage("auth-token", data?.login.token ?? "");

    refetch((v) => !v);
  };

  useEffect(() => {
    error && alert(error.message);
  }, [error]);

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
