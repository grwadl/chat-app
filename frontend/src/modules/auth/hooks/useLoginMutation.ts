import { User } from "@/entities/user";
import LOGIN_USER from "@/graphql/mutations/login-user";
import { useMutation } from "@apollo/client";

type LogInUserPayload = { userInfo: Omit<User, "name"> };
export type LogInUserResponse = { login: { user: User; token: string } };

export function useLoginMutation() {
  const [logInUser, { error }] = useMutation<
    LogInUserResponse,
    LogInUserPayload
  >(LOGIN_USER);

  return { logInUser, error };
}
