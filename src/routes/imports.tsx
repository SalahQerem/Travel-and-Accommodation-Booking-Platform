import { lazy } from "react";

export const AccessDenied = lazy(() => import("@/pages/AccessDenied"));
export const NotFound = lazy(() => import("@/pages/NotFound"));
export const Unauthenticated = lazy(() => import("@/pages/Unauthenticated"));

export const LandingPage = lazy(() => import("@/pages/LandingPage"));
export const Login = lazy(() => import("@/pages/Login"));
export const SearchForReservations = lazy(
  () => import("@/pages/SearchForReservations")
);
export const HotelDetails = lazy(() => import("@/pages/HotelDetails"));
export const Checkout = lazy(() => import("@/pages/Checkout"));
export const BookingConfirmation = lazy(
  () => import("@/pages/BookingConfirmation")
);
export const Hotels = lazy(() => import("@/pages/Admin/Hotels"));
export const Cities = lazy(() => import("@/pages/Admin/Cities"));
export const Rooms = lazy(() => import("@/pages/Admin/Rooms"));
