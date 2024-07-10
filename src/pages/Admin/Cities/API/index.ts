import { axiosInstance } from "@/config/axios.config";
import { AddCityRequest, DeleteCityRequest, UpdateCityRequest } from "./types";

export const addCityAPI = async (payload: AddCityRequest) => {
  const res = await axiosInstance.post(`/cities`, payload);
  return res.data;
};

export const deleteCityAPI = async (payload: DeleteCityRequest) => {
  const res = await axiosInstance.delete(`/cities/${payload.id}`);
  return res.data;
};

export const updateCityAPI = async (payload: UpdateCityRequest) => {
  const res = await axiosInstance.put(`/cities/${payload.id}`, payload);
  return res.data;
};
