import { useSnackBar } from "@/hooks/useSnackbar";
import { City } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCityAPI } from "../API";

const useUpdateCityAPI = (
  cityToUpdate: City,
  handleCloseCityFormDialog: () => void
) => {
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: updateCity, isPending } = useMutation({
    mutationFn: updateCityAPI,
    onSuccess: (response) => {
      showSuccessSnackbar({ message: "City Updated Successfully" });
      handleCloseCityFormDialog();
      console.log(response);
      queryClient.setQueryData(
        ["cities"],
        [
          ...(queryClient.getQueryData(["cities"]) as Array<City>).filter(
            (city) => city.id != cityToUpdate.id
          ),
          cityToUpdate,
        ]
      );
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
