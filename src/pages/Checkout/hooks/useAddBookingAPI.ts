import { clearCart } from "@/features/Cart";
import { useSnackBar } from "@/hooks/useSnackbar";
import { useAppDispatch } from "@/store";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { addBookingAPI } from "../API";

const useAddBookingAPI = () => {
  const dispatch = useAppDispatch();
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();
  const navigate = useNavigate();

  const { mutate: addBooking, isPending } = useMutation({
    mutationFn: addBookingAPI,
    onSuccess: () => {
      showSuccessSnackbar({ message: "Your booking has been confirmed" });
      dispatch(clearCart());
      navigate("/me/booking-confirmation");
    },
    onError: () => {
      showErrorSnackbar({ message: "Sorry, your booking is failed" });
    },
  });

  return {
    addBooking,
    isPending,
  };
};

export default useAddBookingAPI;
