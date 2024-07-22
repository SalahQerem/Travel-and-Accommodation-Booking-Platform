import { useQuery } from "@tanstack/react-query";
import { getTrendingDestinationsAPI } from "../API";
import { GetTrendingDestinationsResponse } from "../API/types";

const useGetTrendingDestinationsAPI = () => {
  const { data: trendingDestinations, isFetching } =
    useQuery<GetTrendingDestinationsResponse>({
      queryKey: ["trending-destinations"],
      queryFn: getTrendingDestinationsAPI,
    });

  return { trendingDestinations: trendingDestinations ?? [], isFetching };
};

export default useGetTrendingDestinationsAPI;
