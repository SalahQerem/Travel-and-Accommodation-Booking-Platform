import { useSnackBar } from "@/hooks/useSnackbar";
import { AxiosBaseError } from "@/types/axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getHotelDetailsAPI } from "./API";
import { GetHotelDetailsResponse } from "./API/types";

const useGetHotelDetailsAPI = (hotelId: string) => {
  const { showErrorSnackbar } = useSnackBar();

  const {
    data: hotel,
    isFetching,
    error,
  } = useQuery<GetHotelDetailsResponse>({
    queryKey: ["hotel-details", hotelId],
    queryFn: () => getHotelDetailsAPI(hotelId),
  });

  useEffect(() => {
    if (!error) return;

    const message = extractErrorMessage(error as AxiosBaseError);
    showErrorSnackbar({
      message,
    });
  }, [error]);

  return { hotel, isFetchingHotel: isFetching };
};

export default useGetHotelDetailsAPI;
