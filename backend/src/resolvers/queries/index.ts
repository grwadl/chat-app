import { MyContext } from "../..";
import { QueryResolvers } from "../../types";

export const RootQuery: QueryResolvers<MyContext> = {
  users: (parent, args) => [],
  messages: (parent, args) => [],
};
