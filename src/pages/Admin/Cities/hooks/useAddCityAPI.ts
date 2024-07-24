import { useSnackBar } from "@/hooks/useSnackbar";
import { AxiosBaseError } from "@/types/axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCityAPI } from "../API";
import { City } from "@/types";

const useAddCityAPI = (handleCloseCityFormDialog: () => void) => {
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: addCity, isPending } = useMutation({
    mutationFn: addCityAPI,
    onSuccess: (response) => {
      showSuccessSnackbar({ message: "City Added Successfully" });
      handleCloseCityFormDialog();
      queryClient.setQueryData(
        ["cities"],
        [...(queryClient.getQueryData(["cities"]) as Array<City>), response]
      );
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
