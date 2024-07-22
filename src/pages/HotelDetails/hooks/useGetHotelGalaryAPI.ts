import { useQuery } from "@tanstack/react-query";
import { getHotelGalaryAPI } from "../API";
import { GetHotelGalaryResponse } from "../API/types";

const useGetHotelGalaryAPI = (hotelId: string) => {
  const { data: galary, isFetching } = useQuery<GetHotelGalaryResponse>({
    queryKey: ["hotel-galary", hotelId],
    queryFn: () => getHotelGalaryAPI(hotelId),
  });

  const outdoorImage = galary?.at(0);
  const wideImages = galary?.slice(1, 2).concat(galary?.slice(4, 5)) ?? [];
  const squareImages =
    galary?.slice(2, 4).concat(galary?.slice(5, galary?.length)) ?? [];

  return {
    outdoorImage,
    wideImages,
    squareImages,
    isFetchingGalary: isFetching,
  };
};

export default useGetHotelGalaryAPI;
