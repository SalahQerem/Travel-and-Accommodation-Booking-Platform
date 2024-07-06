import { useSnackBar } from "@/hooks/useSnackbar";
import { AxiosBaseError } from "@/types/axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { GetHotelsRequestQuery, GetHotelsResponse } from "../API/types";
import { getHotelsAPI } from "../API";

const useGetHotelsAPI = (requestQuery: GetHotelsRequestQuery) => {
  const { showErrorSnackbar } = useSnackBar();

  const {
    data: hotels,
    error,
    isFetching,
  } = useQuery<GetHotelsResponse>({
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

  return { hotels, isFetching };
};

export default useGetHotelsAPI;
