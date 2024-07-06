import { axiosInstance } from "@/config/axios.config";
import { GetHotelsResponse } from "./types";
import { PaginationProps, QueryObj } from "@/types";
import { getUrlQueryString } from "@/utils/urlQueryParams";

export const getHotelsAPI = async (query: QueryObj) => {
  const requestUrl = getUrlQueryString("/hotels", query);

  const res = await axiosInstance.get<GetHotelsResponse>(requestUrl);

  const paginationJson = res.headers["x-pagination"];
  const { TotalPageCount }: PaginationProps = JSON.parse(paginationJson);

  return { hotels: res.data, TotalPageCount };
};
