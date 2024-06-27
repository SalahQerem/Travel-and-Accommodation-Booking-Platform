import { RootState } from "@/store/store";

export const selectCart = ({ cart }: RootState) => cart;

export const selectCartItemsCount = ({ cart }: RootState) => cart.length;
