import { LoadingButton } from "@mui/lab";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Stack,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { FC, forwardRef } from "react";
import { ConfirmDialogProps } from "./types";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmActionDialog: FC<ConfirmDialogProps> = ({
  isOpen,
  handleClose,
  title,
  description,
  actions,
}) => {
  const renderActions = actions?.map((action) => (
    <LoadingButton key={action.text} {...action}>
      {action.text}
    </LoadingButton>
  ));

  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <Stack p={2}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
        <DialogActions>{renderActions}</DialogActions>
      </Stack>
    </Dialog>
  );
};

export default ConfirmActionDialog;
