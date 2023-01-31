import { MyContext } from "../..";
import { MutationResolvers } from "../../types";

export const RootMutation: MutationResolvers<MyContext> = {
  user: async (_parent, args, { prisma }) => {
    const user = await prisma.user.create({ data: { name: args.userName } });
    return user;
  },
};
