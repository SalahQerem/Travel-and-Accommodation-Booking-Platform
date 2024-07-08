import { axiosInstance } from "@/config/axios.config";
import { AddHotelRequest, GetHotelsResponse } from "./types";
import { PaginationProps, QueryObj } from "@/types";
import { getUrlQueryString } from "@/utils/urlQueryParams";

export const getHotelsAPI = async (query: QueryObj) => {
  const requestUrl = getUrlQueryString("/hotels", query);

  const res = await axiosInstance.get<GetHotelsResponse>(requestUrl);

  const paginationJson = res.headers["x-pagination"];
  const { TotalPageCount }: PaginationProps = JSON.parse(paginationJson);

  return { hotels: res.data, TotalPageCount };
};

export const addHotelAPI = async (payload: AddHotelRequest) => {
  const res = await axiosInstance.post(
    `/cities/${payload.cityId}/hotels`,
    payload
  );
  return res.data;
};
