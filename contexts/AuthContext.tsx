"use client";

import { createContext, useEffect, useReducer } from "react";

// Define the types
interface User {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface AuthState {
  user: User | null;
}

type AuthAction = { type: "LOGIN"; payload: User } | { type: "LOGOUT" };

// Define the initial state
export const initialState: AuthState = {
  user: typeof localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "null")
    : null,
};

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

// Create the context
export const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AuthContextProvider: React.FC<{
  children: React.ReactNode;
  initialState: AuthState;
}> = ({ children, initialState }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load user data from localStorage on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        dispatch({ type: "LOGIN", payload: parsedUser });
      }
    }
  }, []); // Run this effect only once

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
