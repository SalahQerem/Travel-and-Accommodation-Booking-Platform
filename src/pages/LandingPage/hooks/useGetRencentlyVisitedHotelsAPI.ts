import { selectUser } from "@/features/User";
import { useSnackBar } from "@/hooks/useSnackbar";
import { useAppSelector } from "@/store";
import { AxiosBaseError } from "@/types/axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getRencentlyVisitedHotelsAPI } from "../API";
import { GetRecentlyVisitedHotelsResponse } from "../API/types";

const useGetRencentlyVisitedHotelsAPI = () => {
  const { showErrorSnackbar } = useSnackBar();
  const { user_id } = useAppSelector(selectUser);

  const {
    data: rencentlyVisitedHotels,
    error,
    isFetching,
  } = useQuery<GetRecentlyVisitedHotelsResponse>({
    queryKey: ["rencently-visited-hotels"],
    queryFn: () => getRencentlyVisitedHotelsAPI(user_id),
  });

  useEffect(() => {
    if (!error) return;

    const message = extractErrorMessage(error as AxiosBaseError);
    showErrorSnackbar({
      message,
    });
  }, [error]);

  return { rencentlyVisitedHotels, isFetching };
};

export default useGetRencentlyVisitedHotelsAPI;
