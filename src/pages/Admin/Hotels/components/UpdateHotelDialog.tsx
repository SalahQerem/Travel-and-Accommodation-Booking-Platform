import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { FC } from "react";
import { UpdateHotelDialogProps } from "../types";
import UpdateHotelForm from "./UpdateHotelForm";

const UpdateHotelDialog: FC<UpdateHotelDialogProps> = ({
  isOpen,
  hotelToUpdate,
  handleCloseUpdateHotelDialog,
  refetchHotels,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleCloseUpdateHotelDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>Update Hotel</DialogTitle>
      <DialogContent dividers>
        <UpdateHotelForm
          hotelToUpdate={hotelToUpdate}
          refetchHotels={refetchHotels}
          handleCloseUpdateHotelDialog={handleCloseUpdateHotelDialog}
        />
      </DialogContent>
    </Dialog>
  );
};

export default UpdateHotelDialog;
