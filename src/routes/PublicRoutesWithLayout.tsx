import AppLayout from "@/containers/Layout/AppLayout";
import { RouteObject } from "react-router-dom";
import { LandingPage, MockedUI } from "./imports";

const publicRoutesWithLayout: RouteObject = {
  path: "",
  element: <AppLayout />,
  children: [
    {
      index: true,
      element: <LandingPage />,
    },
    {
      path: "mocked-ui",
      element: <MockedUI />,
    },
  ],
};

export default publicRoutesWithLayout;
