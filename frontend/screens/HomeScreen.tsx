import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useRef } from "react";
import { Text, TextInput } from "react-native";
import Container from "../src/components/base/Container";
import SafeAreaViewCrossPlatform from "../src/components/base/SafeAreaView";
import { RootStackParamList } from "../src/components/navigation/types";
import MyButton from "../src/components/ui/button";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation }: Props) => {
  const inputRef = useRef<TextInput>(null);

  const logIn = () => {
    const nickName = inputRef.current;
    if (!nickName) return;

    navigation.navigate("Chats");
  };

  return (
    <SafeAreaViewCrossPlatform>
      <Container>
        <Text className="font-mont text-2xl">Choose your nickname</Text>
        <TextInput
          className="border  border-gray-200 rounded-md p-2 mt-2 text-lg"
          ref={inputRef}
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
