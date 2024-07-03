import { Room } from "@/pages/HotelDetails/API/types";

export interface CartItemProps {
  room: Room;
}

export interface PaymentMethod {
  name: string;
  value: string;
}
