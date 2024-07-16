import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddToCartPayload, CartState, RemoveFromCartItem } from "./types";
const cashedCart = localStorage.getItem(import.meta.env.VITE_CART_ACCESS_KEY);
// const cashedCart = localStorage.getItem("Safer-cart");

const initialState: CartState = cashedCart ? JSON.parse(cashedCart) : [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state = [];
      localStorage.removeItem(import.meta.env.VITE_CART_ACCESS_KEY);
      // localStorage.removeItem("Safer-cart");
      return state;
    },
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      state = [...state, action.payload];
      localStorage.setItem(
        import.meta.env.VITE_CART_ACCESS_KEY,
        JSON.stringify(state)
      );
      // localStorage.setItem("Safer-cart", JSON.stringify(state));
      return state;
    },
    removeFromCart: (state, action: PayloadAction<RemoveFromCartItem>) => {
      state = state.filter(
        (cartItem) => cartItem.roomNumber !== action.payload.roomNumber
      );
      localStorage.setItem(
        import.meta.env.VITE_CART_ACCESS_KEY,
        JSON.stringify(state)
      );
      // localStorage.setItem("Safer-cart", JSON.stringify(state));
      return state;
    },
  },
});

export const { clearCart, addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
