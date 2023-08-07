import { useAuthContext } from "@/hooks/useAuthContext";

export const useLogout = () => {
  const { dispatch: logoutDispatch } = useAuthContext();

  const logout = () => {
    // Clear local storage
    localStorage.removeItem("user");

    //Dispacth logout
    logoutDispatch({ type: "LOGOUT" });
  };

  return { logout };
};
