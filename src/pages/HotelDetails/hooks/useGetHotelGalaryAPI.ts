import { useSnackBar } from "@/hooks/useSnackbar";
import { AxiosBaseError } from "@/types/axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getHotelGalaryAPI } from "../API";
import { GetHotelGalaryResponse } from "../API/types";

const useGetHotelGalaryAPI = (hotelId: string) => {
  const { showErrorSnackbar } = useSnackBar();

  const {
    data: galary,
    isFetching,
    error,
  } = useQuery<GetHotelGalaryResponse>({
    queryKey: ["hotel-galary", hotelId],
    queryFn: () => getHotelGalaryAPI(hotelId),
  });

  useEffect(() => {
    if (!error) return;

    const message = extractErrorMessage(error as AxiosBaseError);
    showErrorSnackbar({
      message,
    });
  }, [error]);

  const outdoorImage = galary?.at(0);
  const wideImages = galary?.slice(1, 2).concat(galary?.slice(4, 5));
  const squareImages = galary
    ?.slice(2, 4)
    .concat(galary?.slice(5, galary?.length));

  return {
    outdoorImage,
    wideImages,
    squareImages,
    isFetchingGalary: isFetching,
  };
};

export default useGetHotelGalaryAPI;
