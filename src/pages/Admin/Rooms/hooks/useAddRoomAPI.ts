import { useSnackBar } from "@/hooks/useSnackbar";
import { AxiosBaseError } from "@/types/axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import {
  QueryObserverResult,
  RefetchOptions,
  useMutation,
} from "@tanstack/react-query";
import { addRoomAPI } from "../API";
import { GetHotelRoomsResponse } from "../API/types";

const useAddRoomAPI = (
  refetchRooms: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<GetHotelRoomsResponse, Error>>,
  handleCloseAddRoomDialog: () => void
) => {
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();

  const { mutate: addRoom, isPending } = useMutation({
    mutationFn: addRoomAPI,
    onSuccess: () => {
      showSuccessSnackbar({ message: "Room Added Successfully" });
      handleCloseAddRoomDialog();
      refetchRooms();
    },
    onError: (error) => {
      const errorMessage = extractErrorMessage(error as AxiosBaseError);
      showErrorSnackbar({ message: errorMessage });
    },
  });

  return {
    addRoom,
    isPending,
  };
};

export default useAddRoomAPI;
