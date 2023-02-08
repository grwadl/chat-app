import { User } from "@/entities/user";
import SIGN_UP_USER from "@/src/modules/auth/mutations/sign-up-user";
import { useMutation } from "@apollo/client";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { RootStackParamList } from "../../navigation/types";

type UserInfo = { userInfo: User };
type SingUpReturnType = { success: boolean };

export function useSignUpMutation() {
  const [signUp, { error }] = useMutation<SingUpReturnType, UserInfo>(
    SIGN_UP_USER
  );

  return { signUp, error };
}

export function useSignUp(
  navigation: NativeStackScreenProps<RootStackParamList, "SignUp">["navigation"]
) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { signUp } = useSignUpMutation();

  const changeNameHandler = (name: string) => {
    setName(name);
  };

  const changePasswordHandler = (password: string) => {
    setPassword(password);
  };

  const changeEmailHandler = (email: string) => {
    setEmail(email);
  };

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

  return {
    signUpHandler,
    email,
    name,
    password,
    changeEmailHandler,
    changeNameHandler,
    changePasswordHandler,
  };
}
