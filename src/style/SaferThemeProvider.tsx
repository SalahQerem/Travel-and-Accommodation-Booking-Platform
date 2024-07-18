import { selectThemeMode } from "@/features/AppSettings/selectors";
import { useAppSelector } from "@/store";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import getSaferTheme from "./getSaferTheme";

const SaferThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const themeMode = useAppSelector(selectThemeMode);
  const saferTheme = createTheme(getSaferTheme(themeMode));

  return (
    <ThemeProvider theme={saferTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default SaferThemeProvider;
