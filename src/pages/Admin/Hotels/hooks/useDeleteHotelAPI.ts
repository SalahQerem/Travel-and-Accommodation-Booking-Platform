import { useSnackBar } from "@/hooks/useSnackbar";
import {
  QueryObserverResult,
  RefetchOptions,
  useMutation,
} from "@tanstack/react-query";
import { deleteHotelAPI } from "../API";
import { GetHotelsResponseWithTotalPagesCount } from "../../hooks/API/types";

const useDeleteHotelAPI = (
  refetchHotels: (
    options?: RefetchOptions
  ) => Promise<
    QueryObserverResult<GetHotelsResponseWithTotalPagesCount, Error>
  >,
  handleCloseConfirmDeleteDialog: () => void
) => {
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();

  const { mutate: deleteHotel, isPending } = useMutation({
    mutationFn: deleteHotelAPI,
    onSuccess: () => {
      showSuccessSnackbar({ message: "Hotel Deleted Successfully" });
      handleCloseConfirmDeleteDialog();
      setTimeout(() => refetchHotels(), 500);
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
