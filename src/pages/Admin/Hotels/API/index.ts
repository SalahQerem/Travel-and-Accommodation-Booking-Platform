import { axiosInstance } from "@/config/axios.config";
import {
  AddHotelRequest,
  DeleteHotelRequest,
  UpdateHotelRequest,
} from "./types";

export const addHotelAPI = async (payload: AddHotelRequest) => {
  const res = await axiosInstance.post(
    `/cities/${payload.cityId}/hotels`,
    payload
  );
  return res.data;
};

export const deleteHotelAPI = async (payload: DeleteHotelRequest) => {
  const res = await axiosInstance.delete(
    `/cities/${payload.cityId}/hotels/${payload.hotelId}`
  );
  return res.data;
};

export const updateHotelAPI = async (payload: UpdateHotelRequest) => {
  const res = await axiosInstance.put(`/hotels/${payload.id}`, payload);
  return res.data;
};
