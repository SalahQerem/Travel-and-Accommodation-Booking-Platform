import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { AppLayoutContainer } from "./styled";
import useSession from "@/hooks/useSession";
import BlockUI from "../BlockUI";

const AppLayout: FC = () => {
  const { isUpdatingSession } = useSession();

  if (isUpdatingSession) return <BlockUI />;
  return (
    <AppLayoutContainer
      container
      sx={{ bgcolor: (theme) => theme.palette.background.default }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </AppLayoutContainer>
  );
};

export default AppLayout;
