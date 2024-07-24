import { useSnackBar } from "@/hooks/useSnackbar";
import {
  QueryObserverResult,
  RefetchOptions,
  useMutation,
} from "@tanstack/react-query";
import { deleteRoomAPI } from "../API";
import { GetHotelRoomsResponse } from "../API/types";

const useDeleteRoomAPI = (
  refetchRooms: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<GetHotelRoomsResponse, Error>>,
  handleCloseConfirmDeleteDialog: () => void
) => {
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();

  const { mutate: deleteRoom, isPending } = useMutation({
    mutationFn: deleteRoomAPI,
    onSuccess: () => {
      showSuccessSnackbar({ message: "Room Deleted Successfully" });
      handleCloseConfirmDeleteDialog();
      refetchRooms();
    },
    onError: () => {
      showErrorSnackbar({ message: "Can't delete this Room" });
    },
  });

  return {
    deleteRoom,
    isPending,
  };
};

export default useDeleteRoomAPI;
