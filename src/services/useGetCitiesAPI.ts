import { useSnackBar } from "@/hooks/useSnackbar";
import { RequestQuery } from "@/types";
import { AxiosBaseError } from "@/types/axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getCitiesAPI } from "./API";
import { GetCitiesResponse } from "./API/types";

const useGetCitiesAPI = (requestQuery: RequestQuery) => {
  const { showErrorSnackbar } = useSnackBar();

  const {
    data: cities,
    error,
    refetch,
    isFetching,
  } = useQuery<GetCitiesResponse>({
    queryKey: ["cities", requestQuery],
    queryFn: () => getCitiesAPI(requestQuery),
  });

  useEffect(() => {
    if (!error) return;

    const message = extractErrorMessage(error as AxiosBaseError);
    showErrorSnackbar({
      message,
    });
  }, [error]);

  return {
    cities: cities ?? [],
    refetchCities: refetch,
    isFetching,
  };
};

export default useGetCitiesAPI;
