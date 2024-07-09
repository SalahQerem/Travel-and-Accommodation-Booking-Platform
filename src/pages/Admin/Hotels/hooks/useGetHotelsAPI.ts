import { useSnackBar } from "@/hooks/useSnackbar";
import { RequestQuery } from "@/types";
import { AxiosBaseError } from "@/types/axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getHotelsAPI } from "../API";
import { GetHotelsResponseWithTotalPagesCount } from "../API/types";

const useGetHotelsAPI = (requestQuery: RequestQuery) => {
  const { showErrorSnackbar } = useSnackBar();

  const { data, error, refetch, isFetching } =
    useQuery<GetHotelsResponseWithTotalPagesCount>({
      queryKey: ["hotels", requestQuery],
      queryFn: () => getHotelsAPI(requestQuery),
    });

  useEffect(() => {
    if (!error) return;

    const message = extractErrorMessage(error as AxiosBaseError);
    showErrorSnackbar({
      message,
    });
  }, [error]);

  return {
    hotels: data?.hotels ?? [],
    TotalPageCount: data?.TotalPageCount,
    refetchHotels: refetch,
    isFetching,
  };
};

export default useGetHotelsAPI;
