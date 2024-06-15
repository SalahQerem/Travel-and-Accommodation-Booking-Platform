import { useSnackBar } from "@/hooks/useSnackbar";
import { useAppDispatch } from "@/store";
import { AxiosBaseError } from "@/types/axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getPremiumChoicesAPI } from "../API";
import { GetPremiumChoicesResponse } from "../API/types";

const useGetPremiumChoicesAPI = () => {
  const dispatch = useAppDispatch();
  const { showErrorSnackbar } = useSnackBar();

  const {
    data: premiumChoices,
    error,
    isFetching,
  } = useQuery<GetPremiumChoicesResponse>({
    queryKey: ["premium-choices"],
    queryFn: getPremiumChoicesAPI,
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

  return { premiumChoices, isFetching };
};

export default useGetPremiumChoicesAPI;
