import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  const { state, dispatch } = context;

  if (!context) {
    throw new Error(
      "You must call useAuthContext inside a AuthContextProvider"
    );
  }
  return { state, dispatch };
};
