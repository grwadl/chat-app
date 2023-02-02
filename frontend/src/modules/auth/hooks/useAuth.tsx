import { User } from "@/entities/user";
import { makeVar } from "@apollo/client";

type AuthVarInitialState = {
  user: User | null;
  token: string | null;
  isLogined: boolean;
};

export const userAuthVar = makeVar<AuthVarInitialState>({
  user: null,
  token: null,
  isLogined: false,
});
