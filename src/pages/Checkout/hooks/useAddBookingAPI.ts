import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
import { addBookingAPI } from "../API";
import { useAppDispatch } from "@/store";
import { clearCart } from "@/features/Cart";

const useAddBookingAPI = () => {
  const dispatch = useAppDispatch();
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();
  //   const navigate = useNavigate();

  const { mutate: addBooking, isPending } = useMutation({
    mutationFn: addBookingAPI,
    onSuccess: () => {
      showSuccessSnackbar({ message: "Your booking has been confirmed" });
      dispatch(clearCart());
      //   navigate("/");
    },
    onError: () => {
      showErrorSnackbar({ message: "Invalid Credentials" });
    },
  });

  return {
    addBooking,
    isPending,
  };
};

export default useAddBookingAPI;
