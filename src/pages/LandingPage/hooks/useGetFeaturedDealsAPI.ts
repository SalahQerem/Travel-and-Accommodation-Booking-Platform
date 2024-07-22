import { useQuery } from "@tanstack/react-query";
import { getFeaturedDealsAPI } from "../API";
import { GetFeaturesDealsResponse } from "../API/types";

const useGetFeaturedDealsAPI = () => {
  const { data: featuredDeals, isFetching } =
    useQuery<GetFeaturesDealsResponse>({
      queryKey: ["featured-deals"],
      queryFn: getFeaturedDealsAPI,
    });

  return { featuredDeals: featuredDeals ?? [], isFetching };
};

export default useGetFeaturedDealsAPI;
