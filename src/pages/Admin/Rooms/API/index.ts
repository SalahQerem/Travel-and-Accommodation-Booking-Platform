import { axiosInstance } from "@/config/axios.config";
import dayjs from "dayjs";
import {
  AddRoomRequest,
  DeleteRoomRequest,
  GetHotelRoomsResponse,
} from "./types";

export const getHotelRoomsAPI = async (hotelId: string) => {
  const currentData = dayjs(new Date()).format("YYYY-MM-DD");
  const res = await axiosInstance.get<GetHotelRoomsResponse>(
    `/hotels/${hotelId}/rooms?checkInDate=${currentData}&CheckOutDate=${currentData}`
  );

  return res.data;
};

export const addRoomAPI = async (payload: AddRoomRequest) => {
  const res = await axiosInstance.post(
    `/hotels/${payload.hotelId}/rooms`,
    payload
  );
  return res.data;
};

export const deleteRoomAPI = async ({ hotelId, roomId }: DeleteRoomRequest) => {
  const res = await axiosInstance.delete(`/hotels/${hotelId}/rooms/${roomId}`);
  return res.data;
};
