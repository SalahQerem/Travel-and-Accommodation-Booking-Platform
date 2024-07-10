import { useSnackBar } from "@/hooks/useSnackbar";
import { GetHotelsResponseWithTotalPagesCount } from "@/services/API/types";
import { AxiosBaseError } from "@/types/axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import {
  QueryObserverResult,
  RefetchOptions,
  useMutation,
} from "@tanstack/react-query";
import { addHotelAPI } from "../API";

const useAddHotelAPI = (
  refetchHotels: (
    options?: RefetchOptions
  ) => Promise<
    QueryObserverResult<GetHotelsResponseWithTotalPagesCount, Error>
  >,
  handleCloseAddHotelDialog: () => void
) => {
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();

  const { mutate: addHotel, isPending } = useMutation({
    mutationFn: addHotelAPI,
    onSuccess: () => {
      showSuccessSnackbar({ message: "Hotel Added Successfully" });
      handleCloseAddHotelDialog();
      setTimeout(() => refetchHotels(), 500);
    },
    onError: (error) => {
      const errorMessage = extractErrorMessage(error as AxiosBaseError);
      showErrorSnackbar({ message: errorMessage });
    },
  });

  return {
    addHotel,
    isPending,
  };
};

export default useAddHotelAPI;
