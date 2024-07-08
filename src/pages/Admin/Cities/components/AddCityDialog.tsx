import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { FC } from "react";
import { AddCityDialogProps } from "../types";
import AddCityForm from "./AddCityForm";

const AddCityDialog: FC<AddCityDialogProps> = ({
  isOpen,
  cityToUpdate,
  refetchCities,
  handleCloseCityFormDialog,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleCloseCityFormDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>Add New City</DialogTitle>
      <DialogContent dividers>
        <AddCityForm
          cityToUpdate={cityToUpdate}
          refetchCities={refetchCities}
          handleCloseCityFormDialog={handleCloseCityFormDialog}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AddCityDialog;
