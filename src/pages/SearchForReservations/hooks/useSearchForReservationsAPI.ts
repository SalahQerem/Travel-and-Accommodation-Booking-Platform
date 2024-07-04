import { selectSearchQuery } from "@/features/SearchQuery/selectors";
import { useSnackBar } from "@/hooks/useSnackbar";
import { useAppSelector } from "@/store";
import { AxiosBaseError } from "@/types/axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { searchForReservationsAPI } from "../API";
import { SearchForReservationsResponse } from "../API/types";

const useSearchForReservationsAPI = () => {
  const { showErrorSnackbar } = useSnackBar();
  const searchQuery = useAppSelector(selectSearchQuery);

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
    showErrorSnackbar({
      message,
    });
  }, [error]);

  return { reservations, isFetching };
};

export default useSearchForReservationsAPI;
