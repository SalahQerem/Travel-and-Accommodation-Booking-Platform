import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { FC } from "react";
import { AddCityDialogProps } from "../types";
import AddCityForm from "./AddCityForm";

const AddCityDialog: FC<AddCityDialogProps> = ({
  isOpen,
  refetchCities,
  handleCloseAddCityDialog,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleCloseAddCityDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>Add New City</DialogTitle>
      <DialogContent dividers>
        <AddCityForm
          refetchCities={refetchCities}
          handleCloseAddCityDialog={handleCloseAddCityDialog}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AddCityDialog;
