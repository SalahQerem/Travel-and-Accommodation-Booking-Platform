import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation } from "@tanstack/react-query";
import { deleteRoomAPI } from "../API";

const useDeleteRoomAPI = () => {
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();

  const { mutate: deleteRoom, isPending } = useMutation({
    mutationFn: deleteRoomAPI,
    onSuccess: () => {
      showSuccessSnackbar({ message: "Room Deleted Successfully" });
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
