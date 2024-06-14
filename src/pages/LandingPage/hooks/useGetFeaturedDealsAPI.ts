import { useSnackBar } from "@/hooks/useSnackbar";
import { useAppDispatch } from "@/store";
import { AxiosBaseError } from "@/types/axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getFeaturedDealsAPI } from "../API";
import { GetFeaturesDealsResponse } from "../API/types";

const useGetFeaturedDealsAPI = () => {
  const dispatch = useAppDispatch();
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
    dispatch(
      showErrorSnackbar({
        message,
      })
    );
  }, [error]);

  return { featuredDeals, isFetching };
};

export default useGetFeaturedDealsAPI;
