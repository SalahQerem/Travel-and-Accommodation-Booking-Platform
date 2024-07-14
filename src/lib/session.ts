import { UserRole } from "@/types/user";
import Cookies from "js-cookie";

export interface SessionData {
  user_id: string;
  given_name: string;
  family_name: string;
  userType: UserRole;
  authentication: string;
}

export const setSession = (token: string) => {
  // Cookies.set(import.meta.env.VITE_TOKEN_ACCESS_KEY, token, {
  //   expires: 1 / 24,
  // });
  Cookies.set("Safer-Auth-Token", token, {
    expires: 1 / 24,
  });
};

export const getSession = () => {
  // return Cookies.get(import.meta.env.VITE_TOKEN_ACCESS_KEY);
  return Cookies.get("Safer-Auth-Token");
};

export const clearSession = () => {
  // Cookies.remove(import.meta.env.VITE_TOKEN_ACCESS_KEY);
  Cookies.remove("Safer-Auth-Token");
};
