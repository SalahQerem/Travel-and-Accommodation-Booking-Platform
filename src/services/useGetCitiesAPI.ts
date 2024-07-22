import { RequestQuery } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { getCitiesAPI } from "./API";
import { GetCitiesResponse } from "./API/types";

const useGetCitiesAPI = (requestQuery: RequestQuery) => {
  const {
    data: cities,
    refetch,
    isFetching,
  } = useQuery<GetCitiesResponse>({
    queryKey: ["cities", requestQuery],
    queryFn: () => getCitiesAPI(requestQuery),
  });

  return {
    cities: cities ?? [],
    refetchCities: refetch,
    isFetching,
  };
};

export default useGetCitiesAPI;
