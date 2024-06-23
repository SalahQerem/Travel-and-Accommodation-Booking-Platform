import { axiosInstance } from "@/config/axios.config";
import { GetHotelDetailsResponse, GetHotelGalaryResponse } from "./types";

export const getHotelDetailsAPI = async (hotelId: string) => {
  const res = await axiosInstance.get<GetHotelDetailsResponse>(
    `/hotels/${hotelId}`
  );
  return res.data;
};

export const getHotelGalaryAPI = async (hotelId: string) => {
  const res = await axiosInstance.get<GetHotelGalaryResponse>(
    `/hotels/${hotelId}/gallery`
  );

  return res.data;
};
