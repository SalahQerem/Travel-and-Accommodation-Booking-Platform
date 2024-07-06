import { useSnackBar } from "@/hooks/useSnackbar";
import { AxiosBaseError } from "@/types/axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getHotelsAPI } from "../API";
import {
  GetHotelsRequestQuery,
  GetHotelsResponseWithTotalPagesCount,
} from "../API/types";

const useGetHotelsAPI = (requestQuery: GetHotelsRequestQuery) => {
  const { showErrorSnackbar } = useSnackBar();

  const { data, error, isFetching } =
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
    hotels: data?.hotels,
    TotalPageCount: data?.TotalPageCount,
    isFetching,
  };
};

export default useGetHotelsAPI;
