import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import useSession from "@/hooks/useSession";
import { Box } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import BlockUI from "../BlockUI";

const AppLayout: FC = () => {
  const { isUpdatingSession } = useSession();

  if (isUpdatingSession) return <BlockUI />;

  return (
    <Box sx={{ transition: " 0.25s" }}>
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default AppLayout;
