import { useSnackBar } from "@/hooks/useSnackbar";
import { GetCitiesResponse } from "@/services/API/types";
import { AxiosBaseError } from "@/types/axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import {
  QueryObserverResult,
  RefetchOptions,
  useMutation,
} from "@tanstack/react-query";
import { addCityAPI } from "../API";

const useAddCityAPI = (
  refetchCities: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<GetCitiesResponse, Error>>,
  handleCloseCityFormDialog: () => void
) => {
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();

  const { mutate: addCity, isPending } = useMutation({
    mutationFn: addCityAPI,
    onSuccess: () => {
      showSuccessSnackbar({ message: "City Added Successfully" });
      handleCloseCityFormDialog();
      refetchCities();
    },
    onError: (error) => {
      const errorMessage = extractErrorMessage(error as AxiosBaseError);
      showErrorSnackbar({ message: errorMessage });
    },
  });
  // Todo add new city to the cashed data
  return {
    addCity,
    isPending,
  };
};

export default useAddCityAPI;
