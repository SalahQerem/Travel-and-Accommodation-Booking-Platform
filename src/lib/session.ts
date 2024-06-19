import { UserRole } from "@/types";
import Cookies from "js-cookie";

export interface SessionData {
  user_id: string;
  given_name: string;
  family_name: string;
  userType: UserRole;
}

export const setSession = (token: string) => {
  Cookies.set(import.meta.env.VITE_TOKEN_ACCESS_KEY, token, {
    expires: 1 / 24,
  });
};

export const getSession = () => {
  return Cookies.get(import.meta.env.VITE_TOKEN_ACCESS_KEY);
};

export const clearSession = () => {
  Cookies.remove(import.meta.env.VITE_TOKEN_ACCESS_KEY);
};
