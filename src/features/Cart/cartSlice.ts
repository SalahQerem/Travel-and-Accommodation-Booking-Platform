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
      localStorage.setItem("safer-cart", JSON.stringify(state));
      return state;
    },
    removeFromCart: (state, action: PayloadAction<RemoveFromCartItem>) => {
      state = state.filter(
        (cartItem) => cartItem.roomNumber !== action.payload.roomNumber
      );
      localStorage.setItem("safer-cart", JSON.stringify(state));
      return state;
    },
  },
});

export const { clearCart, addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
