import { UserRole } from "@/types/user";

export interface PageAccessRight {
  role: UserRole;
}

export type PageAccessName =
  | "Home"
  | "BookingConfirmation"
  | "Checkout"
  | "HotelDetails"
  | "SearchForReservations"
  | "Cities"
  | "Hotels"
  | "Rooms";

export interface RouteConfigs {
  title: string;
  pageAccessName?: PageAccessName;
}
