import { User } from "@/entities/user";
import { VALIDATE_TOKEN } from "@/graphql/queries/validate-token";
import { readFromStorage } from "@/lib/storage";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";

export function useAuth() {
  const [shouldTrigger, setShouldTrigger] = useState<boolean>(false);
  const [isLogined, setIsLogined] = useState<boolean>(false);
  const [validateToken] = useLazyQuery<User>(VALIDATE_TOKEN);

  useEffect(() => {
    async function checkToken() {
      const token = await readFromStorage("auth-token");

      if (!token) return;

      const { data, error } = await validateToken({
        fetchPolicy: "no-cache",
        variables: {
          token,
        },
      });
      setIsLogined(!!data && !error);
    }
    checkToken();
  }, [shouldTrigger]);

  return { isLogined: isLogined, setShouldTrigger };
}
