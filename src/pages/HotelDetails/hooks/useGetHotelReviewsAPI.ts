import { useQuery } from "@tanstack/react-query";
import { getHotelReviewsAPI } from "../API";
import { GetHotelReviewsResponse } from "../API/types";

const useGetHotelReviewsAPI = (hotelId: string) => {
  const { data: reviews, isFetching } = useQuery<GetHotelReviewsResponse>({
    queryKey: ["hotel-reviews", hotelId],
    queryFn: () => getHotelReviewsAPI(hotelId),
  });

  return { reviews: reviews ?? [], isFetchingReviews: isFetching };
};

export default useGetHotelReviewsAPI;
