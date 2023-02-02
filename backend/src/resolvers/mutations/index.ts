import { MyContext } from "../..";
import { MutationResolvers } from "../../types";
import { loginResolver, signUpResolver } from "./auth";

export const RootMutation: MutationResolvers<MyContext> = {
  login: loginResolver,
  signUp: signUpResolver,
};
