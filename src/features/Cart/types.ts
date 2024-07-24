import { Room } from "@/types";

export interface CartItem extends Room {
  checkInDate: string;
  checkOutDate: string;
}

export interface CartState extends Array<CartItem> {}

export interface AddToCartPayload extends CartItem {}

export interface RemoveFromCartPayload {
  roomNumber: string;
}
