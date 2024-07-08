import { axiosInstance } from "@/config/axios.config";
import { QueryObj } from "@/types";
import { getUrlQueryString } from "@/utils/urlQueryParams";
import { AddCityRequest, GetCitiesResponse } from "./types";

export const getCitiesAPI = async (query: QueryObj) => {
  const requestUrl = getUrlQueryString("/cities", query);

  const res = await axiosInstance.get<GetCitiesResponse>(requestUrl);
  return res.data;
};

export const addCityAPI = async (payload: AddCityRequest) => {
  const res = await axiosInstance.post(`/cities`, payload);
  return res.data;
};
