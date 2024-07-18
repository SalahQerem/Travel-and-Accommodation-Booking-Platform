import { RootState } from "@/store";

export const selectThemeMode = (state: RootState) =>
  state.appSettings.themeMode;
