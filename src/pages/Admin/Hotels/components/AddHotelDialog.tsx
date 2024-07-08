import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { FC } from "react";
import { AddHotelDialogProps } from "../types";
import AddHotelForm from "./AddHotelForm";

const AddHotelDialog: FC<AddHotelDialogProps> = ({
  isOpen,
  handleCloseAddHotelDialog,
  refetchHotels,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleCloseAddHotelDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>Add New Hotel</DialogTitle>
      <DialogContent dividers>
        <AddHotelForm
          refetchHotels={refetchHotels}
          handleCloseAddHotelDialog={handleCloseAddHotelDialog}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AddHotelDialog;
