import CREATE_USER from "@/graphql/mutations/create-user";
import { writeToStorage } from "@/lib/storage";
import { useMutation } from "@apollo/client";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Text, TextInput } from "react-native";
import Container from "../src/components/base/Container";
import SafeAreaViewCrossPlatform from "../src/components/base/SafeAreaView";
import MyButton from "../src/components/button";
import { RootStackParamList } from "../src/modules/navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation }: Props) => {
  const [name, setName] = useState("");
  const [createUser, { data, error }] = useMutation(CREATE_USER);

  const logIn = async () => {
    if (!name) return;
    await writeToStorage("name", name);
    // navigation.navigate("Chats");
    await createUser({
      variables: {
        userName: name,
      },
    }).catch(console.error);
  };

  return (
    <SafeAreaViewCrossPlatform>
      <Container>
        <Text className="font-mont text-2xl">Choose your nickname</Text>
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          className="border  border-gray-200 rounded-md p-2 mt-2 text-lg"
        />
        <MyButton
          style={{ marginTop: 20 }}
          onPress={logIn}
          className="mt-2 px-6 py-3 rounded-lg flex items-center"
        >
          <Text className="text-xl text-white">Log in test</Text>
        </MyButton>
      </Container>
    </SafeAreaViewCrossPlatform>
  );
};

export default HomeScreen;
