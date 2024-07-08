import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation } from "@tanstack/react-query";
import { deleteHotelAPI } from "../API";

const useDeleteHotelAPI = () => {
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();

  const { mutate: deleteHotel, isPending } = useMutation({
    mutationFn: deleteHotelAPI,
    onSuccess: () => {
      showSuccessSnackbar({ message: "Hotel Deleted Successfully" });
    },
    onError: () => {
      showErrorSnackbar({ message: "Can't delete this Hotel" });
    },
  });

  return {
    deleteHotel,
    isPending,
  };
};

export default useDeleteHotelAPI;
