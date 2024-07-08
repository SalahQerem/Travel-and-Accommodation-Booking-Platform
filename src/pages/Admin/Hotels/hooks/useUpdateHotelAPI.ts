import { useSnackBar } from "@/hooks/useSnackbar";
import {
  QueryObserverResult,
  RefetchOptions,
  useMutation,
} from "@tanstack/react-query";
import { updateHotelAPI } from "../API";
import { GetHotelsResponseWithTotalPagesCount } from "../API/types";

const useUpdateHotelAPI = (
  refetchHotels: (
    options?: RefetchOptions
  ) => Promise<
    QueryObserverResult<GetHotelsResponseWithTotalPagesCount, Error>
  >,
  handleCloseUpdateHotelDialog: () => void
) => {
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();

  const { mutate: updateHotel, isPending } = useMutation({
    mutationFn: updateHotelAPI,
    onSuccess: () => {
      showSuccessSnackbar({ message: "Hotel Updated Successfully" });
      handleCloseUpdateHotelDialog();
      setTimeout(() => refetchHotels(), 500);
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
