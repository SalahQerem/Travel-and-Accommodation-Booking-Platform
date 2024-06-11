import { lazy } from "react";

export const AccessDenied = lazy(() => import("@/pages/AccessDenied"));
export const NotFound = lazy(() => import("@/pages/NotFound"));
export const Unauthenticated = lazy(() => import("@/pages/Unauthenticated"));
