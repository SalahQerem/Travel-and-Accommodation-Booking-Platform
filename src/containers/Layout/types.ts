import { PaletteMode } from "@mui/material";

export interface AppLayoutProps {
  themeMode: PaletteMode;
  toggleThemeMode: () => void;
}
