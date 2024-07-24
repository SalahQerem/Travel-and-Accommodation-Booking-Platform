import { useSnackBar } from "@/hooks/useSnackbar";
import { City } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCityAPI } from "../API";

const useDeleteCityAPI = (
  cityToDelete: City,
  handleCloseConfirmDeleteDialog: () => void
) => {
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: deleteCity, isPending } = useMutation({
    mutationFn: deleteCityAPI,
    onSuccess: () => {
      showSuccessSnackbar({ message: "City Deleted Successfully" });
      handleCloseConfirmDeleteDialog();
      queryClient.setQueryData(
        ["cities"],
        [
          ...(queryClient.getQueryData(["cities"]) as Array<City>).filter(
            (city) => city.id != cityToDelete.id
          ),
        ]
      );
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
