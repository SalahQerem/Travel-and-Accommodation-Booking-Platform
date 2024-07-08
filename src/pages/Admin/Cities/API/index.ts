import { axiosInstance } from "@/config/axios.config";
import { QueryObj } from "@/types";
import { getUrlQueryString } from "@/utils/urlQueryParams";
import {
  AddCityRequest,
  DeleteCityRequest,
  GetCitiesResponse,
  UpdateCityRequest,
} from "./types";

export const getCitiesAPI = async (query: QueryObj) => {
  const requestUrl = getUrlQueryString("/cities", query);

  const res = await axiosInstance.get<GetCitiesResponse>(requestUrl);
  return res.data;
};

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
