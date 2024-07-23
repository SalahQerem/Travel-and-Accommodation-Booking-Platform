import { useSnackBar } from "@/hooks/useSnackbar";
import { GetCitiesResponse } from "@/services/API/types";
import {
  QueryObserverResult,
  RefetchOptions,
  useMutation,
} from "@tanstack/react-query";
import { updateCityAPI } from "../API";

const useUpdateCityAPI = (
  refetchCities: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<GetCitiesResponse, Error>>,
  handleCloseCityFormDialog: () => void
) => {
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();

  const { mutate: updateCity, isPending } = useMutation({
    mutationFn: updateCityAPI,
    onSuccess: () => {
      showSuccessSnackbar({ message: "City Updated Successfully" });
      handleCloseCityFormDialog();
      refetchCities();
    },
    onError: () => {
      showErrorSnackbar({ message: "Can't update this City" });
    },
  });

  return {
    updateCity,
    isUpdating: isPending,
  };
};

export default useUpdateCityAPI;
