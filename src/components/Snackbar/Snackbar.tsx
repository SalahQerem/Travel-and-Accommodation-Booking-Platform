import React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import Alert from "./Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Slide from "@mui/material/Slide";
import { hideSnackbar, selectSnackbar } from "@/features/Snackbar";
import { useAppDispatch, useAppSelector } from "@/store";

const AnharSnackbar = () => {
  const dispatch = useAppDispatch();
  const {
    isOpen,
    title,
    message,
    severity,
    variant,
    anchorOrigin,
    autoHideDuration,
    icon,
    alertAction,
  } = useAppSelector(selectSnackbar);

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;

    dispatch(hideSnackbar());
  };

  return (
    <Stack gap={2} sx={{ width: "100%" }}>
      <Snackbar
        open={isOpen}
        autoHideDuration={autoHideDuration}
        anchorOrigin={anchorOrigin}
        onClose={handleClose}
        TransitionComponent={Slide}
      >
        <Alert
          icon={icon}
          variant={variant}
          severity={severity}
          onClose={handleClose}
          sx={{ width: "100%" }}
          action={alertAction}
        >
          {title && <AlertTitle>{title}</AlertTitle>}
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default AnharSnackbar;
