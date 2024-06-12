import AppLayout from "@/containers/Layout/AppLayout";
import { RouteObject } from "react-router-dom";
import {
  AccessDenied,
  LandingPage,
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
