export interface CartItem {
  roomNumber: string;
  roomType: string;
  price: number;
}

export interface CartState extends Array<CartItem> {}

export interface AddToCartPayload extends CartItem {}

export interface RemoveFromCartItem {
  roomNumber: string;
}
