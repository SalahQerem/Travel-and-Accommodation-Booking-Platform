import { useQuery } from "@tanstack/react-query";
import { GetHotelDetailsResponse } from "../API/types";
import { getHotelDetailsAPI } from "../API";
import { useSnackBar } from "@/hooks/useSnackbar";
import { useEffect } from "react";
import { extractErrorMessage } from "@/utils/errorHandling";
import { AxiosBaseError } from "@/types/axios";

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

  return { hotel, isFetching };
};

export default useGetHotelDetailsAPI;
