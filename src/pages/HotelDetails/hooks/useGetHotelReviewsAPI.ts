import { useSnackBar } from "@/hooks/useSnackbar";
import { AxiosBaseError } from "@/types/axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getHotelReviewsAPI } from "../API";
import { GetHotelReviewsResponse } from "../API/types";

const useGetHotelReviewsAPI = (hotelId: string) => {
  const { showErrorSnackbar } = useSnackBar();

  const {
    data: reviews,
    isFetching,
    error,
  } = useQuery<GetHotelReviewsResponse>({
    queryKey: ["hotel-reviews", hotelId],
    queryFn: () => getHotelReviewsAPI(hotelId),
  });

  useEffect(() => {
    if (!error) return;

    const message = extractErrorMessage(error as AxiosBaseError);
    showErrorSnackbar({
      message,
    });
  }, [error]);

  return { reviews, isFetchingReviews: isFetching };
};

export default useGetHotelReviewsAPI;
