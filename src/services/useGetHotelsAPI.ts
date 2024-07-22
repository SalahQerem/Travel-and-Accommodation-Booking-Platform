import { RequestQuery } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { getHotelsAPI } from "./API";
import { GetHotelsResponseWithTotalPagesCount } from "./API/types";

const useGetHotelsAPI = (requestQuery: RequestQuery) => {
  const { data, refetch, isFetching } =
    useQuery<GetHotelsResponseWithTotalPagesCount>({
      queryKey: ["hotels", requestQuery],
      queryFn: () => getHotelsAPI(requestQuery),
    });

  return {
    hotels: data?.hotels ?? [],
    TotalPageCount: data?.TotalPageCount,
    refetchHotels: refetch,
    isFetching,
  };
};

export default useGetHotelsAPI;
