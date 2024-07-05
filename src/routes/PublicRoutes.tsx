import { RouteObject } from "react-router-dom";
import {
  AccessDenied,
  Login,
  MockedUI,
  NotFound,
  Unauthenticated,
} from "./imports";

const publicRoutes: RouteObject = {
  path: "",
  children: [
    {
      index: true,
      element: <Login />,
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
      path: "mocked-ui",
      element: <MockedUI />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
};

export default publicRoutes;
