import { SnackbarState, ShowSnackbarPayload } from "./types";

export const showSnackbarHelper = (
  state: SnackbarState,
  payload: ShowSnackbarPayload
) => {
  const {
    message,
    title = null,
    severity = "info",
    variant = "standard",
    anchorOrigin = { vertical: "top", horizontal: "center" },
    autoHideDuration = 6000,
    icon = undefined,
    alertAction = undefined,
  } = payload;

  state.isOpen = true;
  state.title = title;
  state.message = message;
  state.severity = severity;
  state.variant = variant;
  state.anchorOrigin = anchorOrigin;
  state.autoHideDuration = autoHideDuration;
  state.icon = icon;
  state.alertAction = alertAction;
};
