import { axiosInstance } from "@/config/axios.config";
import {
  AddHotelRequest,
  DeleteHotelRequest,
  GetHotelsResponse,
} from "./types";
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

export const deleteHotelAPI = async (payload: DeleteHotelRequest) => {
  const res = await axiosInstance.delete(
    `/cities/${payload.cityId}/hotels/${payload.hotelId}`
  );
  return res.data;
};
