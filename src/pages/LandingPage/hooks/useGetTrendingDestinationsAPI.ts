import { useSnackBar } from "@/hooks/useSnackbar";
import { AxiosBaseError } from "@/types/axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getTrendingDestinationsAPI } from "../API";
import { GetTrendingDestinationsResponse } from "../API/types";

const useGetTrendingDestinationsAPI = () => {
  const { showErrorSnackbar } = useSnackBar();

  const {
    data: trendingDestinations,
    error,
    isFetching,
  } = useQuery<GetTrendingDestinationsResponse>({
    queryKey: ["trending-destinations"],
    queryFn: getTrendingDestinationsAPI,
  });

  useEffect(() => {
    if (!error) return;

    const message = extractErrorMessage(error as AxiosBaseError);
    showErrorSnackbar({
      message,
    });
  }, [error]);

  return { trendingDestinations, isFetching };
};

export default useGetTrendingDestinationsAPI;
