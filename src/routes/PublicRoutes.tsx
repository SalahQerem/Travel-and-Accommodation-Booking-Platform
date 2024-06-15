import AppLayout from "@/containers/Layout/AppLayout";
import { RouteObject } from "react-router-dom";
import {
  AccessDenied,
  LandingPage,
  Login,
  MockedUI,
  NotFound,
  Unauthenticated,
} from "./imports";

const publicRoutes: RouteObject = {
  path: "",
  element: <AppLayout />,
  children: [
    {
      index: true,
      element: <LandingPage />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "mocked-ui",
      element: <MockedUI />,
    },
    {
      path: "access-denied",
      element: <AccessDenied />,
    },
    {
      path: "unauthenticated",
      element: <Unauthenticated />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
};

export default publicRoutes;
