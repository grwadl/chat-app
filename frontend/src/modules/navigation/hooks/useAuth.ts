import { User } from "@/entities/user";
import { VALIDATE_TOKEN } from "@/graphql/queries/validate-token";
import { readFromStorage } from "@/lib/storage";
import { useLazyQuery, useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { userAuthVar } from "../../auth/hooks/useAuth";

export type ValidateTokenResponse = {
  validateToken: {
    user: User | null;
    token: string;
  };
};

export function useAuth() {
  const authInfo = useReactiveVar(userAuthVar);
  const [validateToken, { loading }] =
    useLazyQuery<ValidateTokenResponse>(VALIDATE_TOKEN);

  useEffect(() => {
    async function checkToken() {
      const token = await readFromStorage("auth-token");
      if (!token) return;

      const { data, error } = await validateToken({
        variables: {
          token,
        },
      });
      if (!data || error) return;
      userAuthVar({ ...data.validateToken, isLogined: true });
    }
    checkToken();
  }, []);

  return { isLogined: authInfo.isLogined, loading };
}
