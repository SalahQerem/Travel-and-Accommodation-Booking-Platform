import { selectSearchQuery } from "@/features/SearchQuery/selectors";
import { useAppSelector } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { searchForReservationsAPI } from "../API";
import { SearchForReservationsResponse } from "../API/types";

const useSearchForReservationsAPI = () => {
  const searchQuery = useAppSelector(selectSearchQuery);

  const { data: reservations, isFetching } =
    useQuery<SearchForReservationsResponse>({
      queryKey: ["reservations", searchQuery],
      queryFn: () => searchForReservationsAPI(searchQuery),
    });

  return { reservations: reservations ?? [], isFetching };
};

export default useSearchForReservationsAPI;
