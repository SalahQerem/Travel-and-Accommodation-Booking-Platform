import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddToCartPayload, CartState, RemoveFromCartItem } from "./types";
const cashedCart = localStorage.getItem("safer-cart");

const initialState: CartState = cashedCart ? JSON.parse(cashedCart) : [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state = [];
      return state;
    },
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      state = [...state, action.payload];
      return state;
    },
    removeFromCart: (state, action: PayloadAction<RemoveFromCartItem>) => {
      state = state.filter(
        (cartItem) => cartItem.roomNumber !== action.payload.roomNumber
      );
      return state;
    },
  },
});

export const { clearCart, addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
