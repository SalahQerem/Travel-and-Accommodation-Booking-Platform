import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ShowSnackbarPayload, SnackbarState } from "./types";
import { showSnackbarHelper } from "./utils";

const initialState: SnackbarState = {
  isOpen: false,
  severity: "info",
  variant: "standard",
  title: null,
  message: "",
  anchorOrigin: { vertical: "top", horizontal: "center" },
  autoHideDuration: null,
  icon: undefined,
  alertAction: null,
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbar: (state, action: PayloadAction<ShowSnackbarPayload>) => {
      showSnackbarHelper(state, action.payload);
    },
    showSuccessSnackbar: (
      state,
      action: PayloadAction<ShowSnackbarPayload>
    ) => {
      const payload: ShowSnackbarPayload = {
        ...action.payload,
        severity: "success",
      };

      showSnackbarHelper(state, payload);
    },
    showWarningSnackbar: (
      state,
      action: PayloadAction<ShowSnackbarPayload>
    ) => {
      const payload: ShowSnackbarPayload = {
        ...action.payload,
        severity: "warning",
        autoHideDuration: null,
      };

      showSnackbarHelper(state, payload);
    },
    showErrorSnackbar: (state, action: PayloadAction<ShowSnackbarPayload>) => {
      const payload: ShowSnackbarPayload = {
        ...action.payload,
        severity: "error",
        autoHideDuration: null,
      };

      showSnackbarHelper(state, payload);
    },
    hideSnackbar: (state) => {
      state.isOpen = false;
    },
  },
});

export const {
  showSnackbar,
  showSuccessSnackbar,
  showWarningSnackbar,
  showErrorSnackbar,
  hideSnackbar,
} = snackbarSlice.actions;

export default snackbarSlice.reducer;
