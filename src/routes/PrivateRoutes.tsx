import AppLayout from "@/containers/Layout/AppLayout";
import { RouteObject } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import { Checkout } from "./imports";

const privateRoutes: RouteObject = {
  path: "/me",
  element: <AppLayout />,
  children: [
    {
      element: <AuthRoute />,
      children: [
        {
          path: "checkout",
          element: <Checkout />,
        },
      ],
    },
  ],
};

export default privateRoutes;
