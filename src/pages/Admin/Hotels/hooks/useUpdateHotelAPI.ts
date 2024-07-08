import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation } from "@tanstack/react-query";
import { updateHotelAPI } from "../API";

const useUpdateHotelAPI = () => {
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();

  const { mutate: updateHotel, isPending } = useMutation({
    mutationFn: updateHotelAPI,
    onSuccess: () => {
      showSuccessSnackbar({ message: "Hotel Added Successfully" });
    },
    onError: () => {
      showErrorSnackbar({ message: "Can't update this Hotel" });
    },
  });

  return {
    updateHotel,
    isPending,
  };
};

export default useUpdateHotelAPI;
