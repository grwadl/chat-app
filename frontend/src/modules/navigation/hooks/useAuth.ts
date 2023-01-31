import { readFromStorage } from "@/lib/storage";
import { useAppDispatch, useAppSelector } from "@/store";
import { login } from "@/store/actions/user-reducer";
import { useEffect } from "react";

export function useAuth() {
  const userState = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function checkIsAuthed() {
      const name = await readFromStorage("name");
      if (name) dispatch(login());
    }

    checkIsAuthed();
  }, []);

  return userState;
}
