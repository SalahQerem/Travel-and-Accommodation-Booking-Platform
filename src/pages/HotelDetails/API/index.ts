import { axiosInstance } from "@/config/axios.config";
import {
  GetHotelDetailsResponse,
  GetHotelGalaryResponse,
  GetHotelReviewsResponse,
} from "./types";

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

export const getHotelReviewsAPI = async (hotelId: string) => {
  const res = await axiosInstance.get<GetHotelReviewsResponse>(
    `/hotels/${hotelId}/reviews`
  );

  return res.data;
};
