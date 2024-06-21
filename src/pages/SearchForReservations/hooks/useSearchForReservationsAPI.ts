import { useSnackBar } from "@/hooks/useSnackbar";
import { useAppDispatch } from "@/store";
import { AxiosBaseError } from "@/types/axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { searchForReservationsAPI } from "../API";
import {
  SearchForReservationsRequest,
  SearchForReservationsResponse,
} from "../API/types";

const useSearchForReservationsAPI = (
  searchQuery: SearchForReservationsRequest
) => {
  const dispatch = useAppDispatch();
  const { showErrorSnackbar } = useSnackBar();

  const {
    data: reservations,
    error,
    isFetching,
  } = useQuery<SearchForReservationsResponse>({
    queryKey: ["reservations", searchQuery],
    queryFn: () => searchForReservationsAPI(searchQuery),
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

  return { reservations, isFetching };
};

export default useSearchForReservationsAPI;
