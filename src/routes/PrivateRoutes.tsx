import AppLayout from "@/containers/Layout/AppLayout";
import { RouteObject } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import { LandingPage } from "./imports";

const privateRoutes: RouteObject = {
  path: "/me",
  element: <AppLayout />,
  children: [
    {
      element: <AuthRoute />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
      ],
    },
  ],
};

export default privateRoutes;
