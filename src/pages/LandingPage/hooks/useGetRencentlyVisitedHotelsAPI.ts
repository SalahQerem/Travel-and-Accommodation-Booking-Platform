import { selectUser } from "@/features/User";
import { useAppSelector } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { getRencentlyVisitedHotelsAPI } from "../API";
import { GetRecentlyVisitedHotelsResponse } from "../API/types";

const useGetRencentlyVisitedHotelsAPI = () => {
  const { user_id } = useAppSelector(selectUser);

  const { data: rencentlyVisitedHotels, isFetching } =
    useQuery<GetRecentlyVisitedHotelsResponse>({
      queryKey: ["rencently-visited-hotels"],
      queryFn: () => getRencentlyVisitedHotelsAPI(user_id),
    });

  return { rencentlyVisitedHotels: rencentlyVisitedHotels ?? [], isFetching };
};

export default useGetRencentlyVisitedHotelsAPI;
