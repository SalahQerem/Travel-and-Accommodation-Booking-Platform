import { useQuery } from "@tanstack/react-query";
import { getCitiesAPI } from "./API";
import { GetCitiesResponse } from "./API/types";

const useGetCitiesAPI = () => {
  const {
    data: cities,
    refetch,
    isFetching,
  } = useQuery<GetCitiesResponse>({
    queryKey: ["cities"],
    queryFn: () => getCitiesAPI(),
  });

  return {
    cities: cities ?? [],
    refetchCities: refetch,
    isFetching,
  };
};

export default useGetCitiesAPI;
