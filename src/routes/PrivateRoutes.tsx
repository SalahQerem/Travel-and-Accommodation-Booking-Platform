import AppLayout from "@/containers/Layout/AppLayout";
import { RouteObject } from "react-router-dom";
import AuthRoute from "./AuthRoute";

const privateRoutes: RouteObject = {
  path: "/me",
  element: <AppLayout />,
  children: [
    {
      element: <AuthRoute />,
      children: [],
    },
  ],
};

export default privateRoutes;
