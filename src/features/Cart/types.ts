import { Room as CartItem } from "@/types";

export interface CartState extends Array<CartItem> {}

export interface AddToCartPayload extends CartItem {}

export interface RemoveFromCartItem {
  roomNumber: string;
}
