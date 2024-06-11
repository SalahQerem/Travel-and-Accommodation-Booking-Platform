import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { AppLayoutContainer } from "./styled";
import { AppLayoutProps } from "./types";

const AppLayout: FC<AppLayoutProps> = ({ themeMode, toggleThemeMode }) => {
  return (
    <>
      <Navbar themeMode={themeMode} toggleThemeMode={toggleThemeMode} />
      <AppLayoutContainer container>
        <Outlet />
      </AppLayoutContainer>
      <Footer />
    </>
  );
};

export default AppLayout;
