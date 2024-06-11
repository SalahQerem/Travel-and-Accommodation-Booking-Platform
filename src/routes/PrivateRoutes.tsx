import { RouteObject } from "react-router-dom";
import AuthRoute from "./AuthRoute";

const privateRoutes: RouteObject = {
  path: "/me",
  children: [
    {
      element: <AuthRoute />,
      children: [],
    },
  ],
};

export default privateRoutes;
