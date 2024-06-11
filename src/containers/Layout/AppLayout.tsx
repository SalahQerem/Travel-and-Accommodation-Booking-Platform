import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { AppLayoutContainer } from "./styled";

const AppLayout: FC = () => {
  return (
    <>
      <Navbar />
      <AppLayoutContainer container>
        <Outlet />
      </AppLayoutContainer>
      <Footer />
    </>
  );
};

export default AppLayout;
