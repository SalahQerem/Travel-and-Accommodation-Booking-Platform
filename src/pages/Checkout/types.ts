import { Room } from "@/types";

export interface CartItemProps {
  room: Room;
}

export interface PaymentMethod {
  name: string;
  value: string;
}
