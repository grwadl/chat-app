import { User } from "@/entities/user";
import SIGN_UP_USER from "@/graphql/mutations/sign-up-user";
import Container from "@/src/components/base/Container";
import SafeAreaViewCrossPlatform from "@/src/components/base/SafeAreaView";
import MyButton from "@/src/components/button";
import { RootStackParamList } from "@/src/modules/navigation/types";
import { useMutation } from "@apollo/client";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Text, TextInput } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "SignUp">;
type UserInfo = { userInfo: User };
type SingUpReturnType = { success: boolean };

const SignUpScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [logInUser, { data, error }] = useMutation<SingUpReturnType, UserInfo>(
    SIGN_UP_USER
  );

  const signUp = async () => {
    if (!email || !password || !name) return;

    const userInfo = { email, password, name };

    const { data } = await logInUser({
      variables: { userInfo },
    });

    if (!data || data?.success) return alert("Please try again");

    alert("Now login to your account!");
    navigation.navigate("Login");
  };

  useEffect(() => {
    error && alert(error);
  }, [error]);

  return (
    <SafeAreaViewCrossPlatform>
      <Container>
        <Text className="font-mont text-2xl">Sign up</Text>
        <TextInput
          value={email}
          placeholder="Email..."
          onChangeText={(text) => setEmail(text)}
          className="border  border-gray-200 rounded-md p-2 mt-4 text-lg"
        />
        <TextInput
          value={name}
          placeholder="Name..."
          onChangeText={(text) => setName(text)}
          className="border  border-gray-200 rounded-md p-2 mt-10 text-lg"
        />
        <TextInput
          value={password}
          placeholder="Password..."
          onChangeText={(text) => setPassword(text)}
          className="border  border-gray-200 rounded-md p-2 mt-10 mb-4 text-lg"
        />
        <MyButton
          style={{ marginTop: 20 }}
          onPress={signUp}
          className="px-6 py-3 rounded-lg flex items-center"
        >
          <Text className="text-xl text-white">Sign up</Text>
        </MyButton>

        <Text
          className="text-xl mt-5 block text-center"
          onPress={() => navigation.navigate("Login")}
        >
          Already have an account?
        </Text>
      </Container>
    </SafeAreaViewCrossPlatform>
  );
};

export default SignUpScreen;
