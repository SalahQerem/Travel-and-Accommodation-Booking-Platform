import { RootState } from "@/store/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectCartItems = ({ cart }: RootState) => cart;

export const selectCartItemsCount = ({ cart }: RootState) => cart.length;

export const selectIsItemInCart = createSelector(
  [selectCartItems, (_, roomNumber) => roomNumber],
  (cartItems, roomNumber) =>
    cartItems.some((item) => item.roomNumber === roomNumber)
);
