import { PaletteMode } from "@mui/material";

export interface NavbarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}
