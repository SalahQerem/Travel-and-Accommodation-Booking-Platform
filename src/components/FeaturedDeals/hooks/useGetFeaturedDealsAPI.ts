import { useQuery } from "@tanstack/react-query";
import { GetFeaturesDealsResponse } from "../API/types";
import { getFeaturedDealsAPI } from "../API";

const useGetFeaturedDealsAPI = () => {
  const { data: featuredDeals, isFetching } =
    useQuery<GetFeaturesDealsResponse>({
      queryKey: ["featured-deals"],
      queryFn: getFeaturedDealsAPI,
    });

  return { featuredDeals, isFetching };
};

export default useGetFeaturedDealsAPI;
