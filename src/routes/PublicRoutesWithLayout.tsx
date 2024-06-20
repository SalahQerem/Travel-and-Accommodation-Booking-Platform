import AppLayout from "@/containers/Layout/AppLayout";
import { RouteObject } from "react-router-dom";
import { LandingPage, MockedUI, SearchForReservations } from "./imports";

const publicRoutesWithLayout: RouteObject = {
  path: "",
  element: <AppLayout />,
  children: [
    {
      index: true,
      element: <LandingPage />,
    },
    {
      path: "search",
      element: <SearchForReservations />,
    },
    {
      path: "mocked-ui",
      element: <MockedUI />,
    },
  ],
};

export default publicRoutesWithLayout;
