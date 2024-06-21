import { lazy } from "react";

export const AccessDenied = lazy(() => import("@/pages/AccessDenied"));
export const NotFound = lazy(() => import("@/pages/NotFound"));
export const Unauthenticated = lazy(() => import("@/pages/Unauthenticated"));

export const LandingPage = lazy(() => import("@/pages/LandingPage"));
export const MockedUI = lazy(() => import("@/pages/Mocked-UI"));
export const Login = lazy(() => import("@/pages/Login"));
export const SearchForReservations = lazy(
  () => import("@/pages/SearchForReservations")
);
