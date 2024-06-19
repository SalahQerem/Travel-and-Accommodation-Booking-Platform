import { RouteObject } from "react-router-dom";
import { AccessDenied, Login, NotFound, Unauthenticated } from "./imports";

const publicRoutes: RouteObject = {
  path: "/auth",
  children: [
    {
      path: "login",
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
      path: "*",
      element: <NotFound />,
    },
  ],
};

export default publicRoutes;
