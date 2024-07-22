import { useQuery } from "@tanstack/react-query";
import { getHotelDetailsAPI } from "./API";
import { GetHotelDetailsResponse } from "./API/types";

const useGetHotelDetailsAPI = (hotelId: string) => {
  const { data: hotel, isFetching } = useQuery<GetHotelDetailsResponse>({
    queryKey: ["hotel-details", hotelId],
    queryFn: () => getHotelDetailsAPI(hotelId),
  });

  return { hotel, isFetchingHotel: isFetching };
};

export default useGetHotelDetailsAPI;
