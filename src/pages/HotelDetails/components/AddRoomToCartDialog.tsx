import DateRangeField from "@/components/Fields/DateRangeField";
import { addToCart } from "@/features/Cart";
import { useSnackBar } from "@/hooks/useSnackbar";
import { useAppDispatch } from "@/store";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import { Plus } from "lucide-react";
import { FC, useState } from "react";
import { defaultCheckInDate, defaultCheckOutDate } from "../constants";
import { AddRoomToCartDialogProps } from "../types";

const AddRoomToCartDialog: FC<AddRoomToCartDialogProps> = ({
  isOpen,
  roomToAddToCart,
  handleCloseAddRoomToCartDialog,
}) => {
  const dispatch = useAppDispatch();
  const { showSuccessSnackbar } = useSnackBar();

  const [checkInDate, setCheckInDate] = useState(defaultCheckInDate);
  const [checkOutDate, setCheckOutDate] = useState(defaultCheckOutDate);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...roomToAddToCart, checkInDate, checkOutDate }));
    showSuccessSnackbar({
      message: "Your Booking has been added to your Cart!",
    });
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleCloseAddRoomToCartDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{ overflow: "visible" }}
    >
      <DialogTitle>Choose your Booking date</DialogTitle>
      <DialogContent dividers sx={{ minWidth: "400px", height: "500px" }}>
        <Stack justifyContent="space-between" height="100%">
          <DateRangeField
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
            setCheckInDate={(newValue: string) => setCheckInDate(newValue)}
            setCheckOutDate={(newValue: string) => setCheckOutDate(newValue)}
          />
          <Stack direction="row" justifyContent="flex-end" gap={2} mt={2}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleAddToCart}
              endIcon={<Plus />}
              disabled={!checkInDate || !checkOutDate}
            >
              Add
            </Button>
            <Button
              variant="contained"
              color="warning"
              onClick={handleCloseAddRoomToCartDialog}
            >
              Cancel
            </Button>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default AddRoomToCartDialog;
