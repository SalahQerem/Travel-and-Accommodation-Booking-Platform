import { useQuery } from "@tanstack/react-query";
import { getHotelRoomsAPI } from "../API";
import { GetHotelRoomsResponse } from "../API/types";

const useGetHotelRoomsAPI = (hotelId: string) => {
  const { data: rooms, isFetching } = useQuery<GetHotelRoomsResponse>({
    queryKey: ["hotel-rooms", hotelId],
    queryFn: () => getHotelRoomsAPI(hotelId),
  });

  return { rooms: rooms ?? [], isFetchingRooms: isFetching };
};

export default useGetHotelRoomsAPI;
