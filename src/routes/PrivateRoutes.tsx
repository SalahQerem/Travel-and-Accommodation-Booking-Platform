import AppLayout from "@/containers/Layout/AppLayout";
import { RouteObject } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import {
  BookingConfirmation,
  Checkout,
  HotelDetails,
  LandingPage,
  SearchForReservations,
} from "./imports";

const privateRoutes: RouteObject = {
  path: "/me",
  element: <AppLayout />,
  children: [
    {
      element: <AuthRoute />,
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
          path: "hotel/:hotelId",
          element: <HotelDetails />,
        },
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
