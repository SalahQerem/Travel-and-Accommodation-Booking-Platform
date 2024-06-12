import { AlertColor, AlertProps } from "@mui/material/Alert";
import { SnackbarOrigin } from "@mui/material/Snackbar";
import { ReactNode } from "react";

export interface SnackbarState {
  message: ReactNode;
  isOpen: boolean;
  title: ReactNode;
  severity: AlertColor | undefined;
  variant: AlertProps["variant"];
  anchorOrigin: SnackbarOrigin;
  autoHideDuration: number | null;
  icon: ReactNode;
  alertAction: ReactNode;
}

export interface ShowSnackbarPayload {
  message: ReactNode;
  title?: ReactNode;
  severity?: AlertColor | undefined;
  variant?: AlertProps["variant"];
  anchorOrigin?: SnackbarOrigin;
  autoHideDuration?: number | null;
  icon?: ReactNode;
  alertAction?: ReactNode;
}
