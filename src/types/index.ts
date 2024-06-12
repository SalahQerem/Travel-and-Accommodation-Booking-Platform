export type UserRole = "Admin" | "User";

export interface User {
  user_id: string;
  given_name: string;
  family_name: string;
  userType: UserRole;
}
