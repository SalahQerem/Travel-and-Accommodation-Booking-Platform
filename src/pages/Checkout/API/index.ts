import { axiosInstance } from "@/config/axios.config";
import { AddBookingAPIRequest, AddBookingAPIResponse } from "./types";

export const addBookingAPI = async (payload: AddBookingAPIRequest) => {
  const res = await axiosInstance.post<AddBookingAPIResponse>("/bookings", {
    ...payload,
  });
  return res.data;
};
