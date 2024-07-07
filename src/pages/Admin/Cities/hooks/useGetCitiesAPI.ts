import { useSnackBar } from "@/hooks/useSnackbar";
import { AxiosBaseError } from "@/types/axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { GetCitiesResponseWithTotalPagesCount } from "../API/types";
import { getCitiesAPI } from "../API";
import { RequestQuery } from "@/types";

const useGetCitiesAPI = (requestQuery: RequestQuery) => {
  const { showErrorSnackbar } = useSnackBar();

  const { data, error, isFetching } =
    useQuery<GetCitiesResponseWithTotalPagesCount>({
      queryKey: ["hotels", requestQuery],
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
    hotels: data?.cities,
    TotalPageCount: data?.TotalPageCount,
    isFetching,
  };
};

export default useGetCitiesAPI;
