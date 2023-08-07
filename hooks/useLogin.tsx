import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

interface LoginResponse {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  error?: string;
}

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { dispatch } = useAuthContext();

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const json: LoginResponse = await res.json();

    // res.ok === false
    if (!res.ok) {
      setLoading(false);

      if (json.error) {
        setError(json.error);
      } else {
        setError("Unknown error occurred.");
      }
    }

    if (res.ok) {
      //Update auth context
      dispatch({
        type: "LOGIN",
        payload: json,
      });

      //Save user in to the local storage
      localStorage.setItem("user", JSON.stringify(json));

      setLoading(false);
    }
  };

  return { login, error, loading };
};
