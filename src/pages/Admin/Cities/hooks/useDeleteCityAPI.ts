import { useSnackBar } from "@/hooks/useSnackbar";
import {
  QueryObserverResult,
  RefetchOptions,
  useMutation,
} from "@tanstack/react-query";
import { deleteCityAPI } from "../API";
import { GetCitiesResponse } from "../API/types";

const useDeleteCityAPI = (
  refetchCities: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<GetCitiesResponse, Error>>,
  handleCloseConfirmDeleteDialog: () => void
) => {
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();

  const { mutate: deleteCity, isPending } = useMutation({
    mutationFn: deleteCityAPI,
    onSuccess: () => {
      showSuccessSnackbar({ message: "City Deleted Successfully" });
      handleCloseConfirmDeleteDialog();
      setTimeout(() => refetchCities(), 500);
    },
    onError: () => {
      showErrorSnackbar({ message: "Can't delete this City" });
    },
  });

  return {
    deleteCity,
    isPending,
  };
};

export default useDeleteCityAPI;
