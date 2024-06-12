import { createSlice } from "@reduxjs/toolkit";
import { AppSettingsState } from "./types";

const initialState: AppSettingsState = {
  themeMode: "light",
};

const appSettingsSlice = createSlice({
  name: "appSettings",
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.themeMode = state.themeMode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleThemeMode } = appSettingsSlice.actions;

export default appSettingsSlice.reducer;
