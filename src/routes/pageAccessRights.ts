import { PageAccessName, PageAccessRight } from "./types";

const pagesAccessRights = new Map<PageAccessName, PageAccessRight>([
  [
    "Home",
    {
      role: "User",
    },
  ],
  [
    "BookingConfirmation",
    {
      role: "User",
    },
  ],
  [
    "Checkout",
    {
      role: "User",
    },
  ],
  [
    "HotelDetails",
    {
      role: "User",
    },
  ],
  [
    "SearchForReservations",
    {
      role: "User",
    },
  ],
  [
    "Cities",
    {
      role: "Admin",
    },
  ],
  [
    "Hotels",
    {
      role: "Admin",
    },
  ],
  [
    "Rooms",
    {
      role: "Admin",
    },
  ],
]);

export default pagesAccessRights;
