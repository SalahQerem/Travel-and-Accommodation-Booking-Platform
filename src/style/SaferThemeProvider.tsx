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
  const [themeMode, setThemeMode] = useState<PaletteMode>("light");
  const saferTheme = createTheme(getSaferTheme(themeMode));

  const toggleThemeMode = () => {
    setThemeMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={saferTheme}>
      <CssBaseline />
      <Navbar themeMode={themeMode} toggleThemeMode={toggleThemeMode} />
      {children}
    </ThemeProvider>
  );
};

export default SaferThemeProvider;
