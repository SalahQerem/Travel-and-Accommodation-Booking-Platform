import Loader from "@/containers/BlockUI";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import publicRoutesWithLayout from "./PublicRoutesWithLayout";

const AppRoutes = () => {
  const appRoutes = useRoutes([
    PublicRoutes,
    PrivateRoutes,
    publicRoutesWithLayout,
  ]);

  return <Suspense fallback={<Loader />}>{appRoutes}</Suspense>;
};

export default AppRoutes;
