import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginPayload, UserState } from "./types";
import { SessionData, clearSession } from "@/lib/session";

const initialState: UserState = {
  family_name: "",
  given_name: "",
  user_id: "",
  userType: "User",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state = { ...action.payload };
      return state;
    },
    updateUserSession: (state, action: PayloadAction<SessionData>) => {
      state = { ...action.payload };
      return state;
    },
    logout: (state) => {
      state = initialState;
      clearSession();
      return state;
    },
  },
});

export const { login, updateUserSession, logout } = userSlice.actions;

export default userSlice.reducer;
