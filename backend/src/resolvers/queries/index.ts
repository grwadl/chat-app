import { MyContext } from "../..";
import { QueryResolvers } from "../../types";
import { validateTokenResolver } from "./auth";

export const RootQuery: QueryResolvers<MyContext> = {
  validateToken: validateTokenResolver,
};
