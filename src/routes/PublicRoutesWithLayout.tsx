import AppLayout from "@/containers/Layout/AppLayout";
import { RouteObject } from "react-router-dom";
import { LandingPage } from "./imports";

const publicRoutesWithLayout: RouteObject = {
  path: "",
  element: <AppLayout />,
  children: [
    {
      index: true,
      element: <LandingPage />,
    },
  ],
};

export default publicRoutesWithLayout;
