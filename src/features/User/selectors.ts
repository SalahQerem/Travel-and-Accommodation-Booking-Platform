import { RootState } from "@/store/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectUser = ({ user }: RootState) => user;

export const selectUserType = ({ user }: RootState) => user.userType;

export const selectIsLoggedIn = createSelector(
  selectUser,
  (user) => user.user_id !== ""
);

export const selectIsAdmin = createSelector(
  selectUserType,
  (role) => role === "Admin"
);

export const selectIsUser = createSelector(
  selectUserType,
  (role) => role === "User"
);
