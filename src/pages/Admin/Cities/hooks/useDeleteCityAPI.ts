import { useSnackBar } from "@/hooks/useSnackbar";
import { GetCitiesResponse } from "@/services/API/types";
import {
  QueryObserverResult,
  RefetchOptions,
  useMutation,
} from "@tanstack/react-query";
import { deleteCityAPI } from "../API";

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
      refetchCities();
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
