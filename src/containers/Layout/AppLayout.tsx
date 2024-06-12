import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { AppLayoutContainer } from "./styled";

const AppLayout: FC = () => {
  return (
    <AppLayoutContainer
      container
      sx={{ bgcolor: (theme) => theme.palette.background.paper }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </AppLayoutContainer>
  );
};

export default AppLayout;
