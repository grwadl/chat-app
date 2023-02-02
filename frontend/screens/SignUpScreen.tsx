import Container from "@/src/components/base/Container";
import SafeAreaViewCrossPlatform from "@/src/components/base/SafeAreaView";
import MyButton from "@/src/components/button";
import { useSignUpMutation } from "@/src/modules/auth/hooks/useSignUpMutation";
import { RootStackParamList } from "@/src/modules/navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Text, TextInput } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "SignUp">;

const SignUpScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { signUp } = useSignUpMutation();

  const signUpHandler = async () => {
    if (!email || !password || !name) return;

    const userInfo = { email, password, name };
    const { data } = await signUp({
      variables: { userInfo },
    });

    if (!data || data?.success) return alert("Please try again");

    alert("Now login to your account!");
    navigation.navigate("Login");
  };

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
          onPress={signUpHandler}
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
