import { VALIDATE_TOKEN } from "../queries/validate-token";
import { readFromStorage, clearStorage } from "@/lib/storage";
import { useLazyQuery, useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { userAuthVar } from "./useAuthVar";
import { ValidateTokenResponse } from "../types/validate-token-response";

export function useAuth() {
  const authInfo = useReactiveVar(userAuthVar);
  const [validateToken, { loading }] =
    useLazyQuery<ValidateTokenResponse>(VALIDATE_TOKEN);

  useEffect(() => {
    async function checkToken() {
      if (authInfo.token || authInfo.isLogined) return;

      const token = await readFromStorage("auth-token");
      if (!token) return;

      const { data, error } = await validateToken({
        variables: {
          token,
        },
      });
      if (!data || error) return clearStorage();
      userAuthVar({ ...data.validateToken, isLogined: true });
    }
    checkToken();
  }, []);

  return { isLogined: authInfo.isLogined, loading };
}
