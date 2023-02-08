import { User } from "@/entities/user";

export type ValidateTokenResponse = {
  validateToken: {
    user: User | null;
    token: string;
  };
};
