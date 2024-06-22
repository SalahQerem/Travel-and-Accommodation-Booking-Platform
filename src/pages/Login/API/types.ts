import { UserRole } from "@/types/user";

export interface LoginPayload {
  userName: string;
  password: string;
}

export interface loginResponse {
  userType: UserRole;
  authentication: string;
}
