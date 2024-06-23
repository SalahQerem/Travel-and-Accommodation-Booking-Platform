import { axiosInstance } from "@/config/axios.config";
import { GetHotelDetailsResponse } from "./types";

export const getHotelDetailsAPI = async (hotelId: string) => {
  const res = await axiosInstance.get<GetHotelDetailsResponse>(
    `/hotels/${hotelId}`
  );
  return res.data;
};
