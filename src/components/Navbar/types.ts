import { PaletteMode } from "@mui/material";

export interface NavbarProps {
  themeMode: PaletteMode;
  toggleThemeMode: () => void;
}
