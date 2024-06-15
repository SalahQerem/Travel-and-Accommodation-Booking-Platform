import { RouteObject } from "react-router-dom";
import {
  AccessDenied,
  Login,
  MockedUI,
  NotFound,
  Unauthenticated,
} from "./imports";

const publicRoutes: RouteObject = {
  path: "/auth",
  children: [
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
