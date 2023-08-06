import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

interface SignupResponse {
  name: string;
  email: string;
  password: string;
  error?: string;
}

export const useSignup = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { dispatch } = useAuthContext();

  const signup = async (name: string, email: string, password: string) => {
    setLoading(true);
    setError(null);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      }
    );

    const json: SignupResponse = await res.json();

    //res.ok ===false
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
      dispatch({ type: "LOGIN", payload: json });

      //Save user into local storage
      localStorage.setItem("user", JSON.stringify(json));

      setLoading(false);
    }
  };

  return { signup, error, loading };
};
