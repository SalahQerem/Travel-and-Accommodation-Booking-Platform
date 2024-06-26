import { useSnackBar } from "@/hooks/useSnackbar";
import { AxiosBaseError } from "@/types/axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getHotelRoomsAPI } from "../API";
import { GetHotelRoomsResponse } from "../API/types";

const useGetHotelRoomsAPI = (hotelId: string) => {
  const { showErrorSnackbar } = useSnackBar();

  const {
    data: rooms,
    isFetching,
    error,
  } = useQuery<GetHotelRoomsResponse>({
    queryKey: ["hotel-rooms", hotelId],
    queryFn: () => getHotelRoomsAPI(hotelId),
  });

  useEffect(() => {
    if (!error) return;

    const message = extractErrorMessage(error as AxiosBaseError);
    showErrorSnackbar({
      message,
    });
  }, [error]);

  return { rooms, isFetchingRooms: isFetching };
};

export default useGetHotelRoomsAPI;
