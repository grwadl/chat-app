import type { Resolvers } from "../types";
import { RootMutation } from "./mutations";
import { RootQuery } from "./queries";

export const resolvers: Resolvers = {
  Query: RootQuery,
  Mutation: RootMutation,
};
