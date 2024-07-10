import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { FC } from "react";
import { AddRoomDialogProps } from "../types";
import AddRoomForm from "./AddRoomForm";

const AddRoomDialog: FC<AddRoomDialogProps> = ({
  isOpen,
  hotels,
  refetchRooms,
  handleCloseAddRoomDialog,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleCloseAddRoomDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>Add New Hotel</DialogTitle>
      <DialogContent dividers>
        <AddRoomForm
          hotels={hotels}
          refetchRooms={refetchRooms}
          handleCloseAddRoomDialog={handleCloseAddRoomDialog}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AddRoomDialog;
