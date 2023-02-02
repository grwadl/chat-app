import { User } from "@/entities/user";
import SIGN_UP_USER from "@/graphql/mutations/sign-up-user";
import { useMutation } from "@apollo/client";

type UserInfo = { userInfo: User };
type SingUpReturnType = { success: boolean };

export function useSignUpMutation() {
  const [signUp, { error }] = useMutation<SingUpReturnType, UserInfo>(
    SIGN_UP_USER
  );

  return { signUp, error };
}
