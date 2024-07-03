import { Room as CartItem } from "@/pages/HotelDetails/API/types";

export interface CartState extends Array<CartItem> {}

export interface AddToCartPayload extends CartItem {}

export interface RemoveFromCartItem {
  roomNumber: string;
}
