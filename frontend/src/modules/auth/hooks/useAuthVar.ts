import { User } from "@/entities/user";
import { makeVar } from "@apollo/client";
import { AuthVarInitialState } from "../types/auth-var";

export const userAuthVar = makeVar<AuthVarInitialState>({
  user: null,
  token: null,
  isLogined: false,
});
