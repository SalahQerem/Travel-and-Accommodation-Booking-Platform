import { useSnackBar } from "@/hooks/useSnackbar";
import {
  QueryObserverResult,
  RefetchOptions,
  useMutation,
} from "@tanstack/react-query";
import { addCityAPI } from "../API";
import { extractErrorMessage } from "@/utils/errorHandling";
import { AxiosBaseError } from "@/types/axios";
import { GetCitiesResponse } from "../API/types";

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
      setTimeout(() => refetchCities(), 500);
    },
    onError: (error) => {
      const errorMessage = extractErrorMessage(error as AxiosBaseError);
      showErrorSnackbar({ message: errorMessage });
    },
  });

  return {
    addCity,
    isPending,
  };
};

export default useAddCityAPI;
