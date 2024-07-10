import { useSnackBar } from "@/hooks/useSnackbar";
import { AxiosBaseError } from "@/types/axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getFeaturedDealsAPI } from "../API";
import { GetFeaturesDealsResponse } from "../API/types";

const useGetFeaturedDealsAPI = () => {
  const { showErrorSnackbar } = useSnackBar();

  const {
    data: featuredDeals,
    error,
    isFetching,
  } = useQuery<GetFeaturesDealsResponse>({
    queryKey: ["featured-deals"],
    queryFn: getFeaturedDealsAPI,
  });

  useEffect(() => {
    if (!error) return;

    const message = extractErrorMessage(error as AxiosBaseError);
    showErrorSnackbar({
      message,
    });
  }, [error]);

  return { featuredDeals: featuredDeals ?? [], isFetching };
};

export default useGetFeaturedDealsAPI;
