import { RootState } from "@/store/store";

export const selectThemeMode = (state: RootState) =>
  state.appSettings.themeMode;
