import { PropsWithChildren } from "react";
import SaferThemeProvider from "./style/SaferThemeProvider";

const Providers = ({ children }: PropsWithChildren) => {
  return <SaferThemeProvider>{children}</SaferThemeProvider>;
};

export default Providers;
