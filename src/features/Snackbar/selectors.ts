import type { RootState } from "@/store/store";

export const selectSnackbar = (state: RootState) => state.snackbar;
