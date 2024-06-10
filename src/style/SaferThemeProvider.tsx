import {
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { PropsWithChildren, useState } from "react";
import getSaferTheme from "./getSaferTheme";
import Navbar from "../components/Navbar";

const SaferThemeProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<PaletteMode>("light");
  const saferTheme = createTheme(getSaferTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={saferTheme}>
      <CssBaseline />
      <Navbar mode={mode} toggleColorMode={toggleColorMode} />
      {children}
    </ThemeProvider>
  );
};

export default SaferThemeProvider;
