import { User } from "@/entities/user";

export type AuthVarInitialState = {
  user: User | null;
  token: string | null;
  isLogined: boolean;
};
