import { RouteObject } from "react-router-dom";

import { AccessDenied, NotFound, Unauthenticated } from "./imports";

const publicRoutes: RouteObject = {
  path: "",
  children: [
    // {
    //   index: true,
    //   path: "",
    //   element: <Landing />,
    // },
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
