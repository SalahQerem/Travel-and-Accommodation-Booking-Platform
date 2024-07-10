import { axiosInstance } from "@/config/axios.config";
import dayjs from "dayjs";
import {
  GetHotelGalaryResponse,
  GetHotelReviewsResponse,
  GetHotelRoomsResponse,
} from "./types";

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

export const getHotelRoomsAPI = async (hotelId: string) => {
  const currentData = dayjs(new Date()).format("YYYY-MM-DD");
  const res = await axiosInstance.get<GetHotelRoomsResponse>(
    `/hotels/${hotelId}/available-rooms?checkInDate=${currentData}&CheckOutDate=${currentData}`
  );

  return res.data;
};
