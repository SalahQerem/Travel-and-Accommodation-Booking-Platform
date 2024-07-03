import AppLayout from "@/containers/Layout/AppLayout";
import { RouteObject } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import { BookingConfirmation, Checkout } from "./imports";

const privateRoutes: RouteObject = {
  path: "/me",
  element: <AppLayout />,
  children: [
    {
      element: <AuthRoute />,
      children: [
        {
          path: "checkout",
          element: <Checkout />,
        },
        {
          path: "booking-confirmation",
          element: <BookingConfirmation />,
        },
      ],
    },
  ],
};

export default privateRoutes;
