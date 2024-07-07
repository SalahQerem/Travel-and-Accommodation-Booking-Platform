import { axiosInstance } from "@/config/axios.config";
import { PaginationProps, QueryObj } from "@/types";
import { getUrlQueryString } from "@/utils/urlQueryParams";
import { GetCitiesResponse } from "./types";

export const getCitiesAPI = async (query: QueryObj) => {
  const requestUrl = getUrlQueryString("/cities", query);

  const res = await axiosInstance.get<GetCitiesResponse>(requestUrl);

  const paginationJson = res.headers["x-pagination"];
  const { TotalPageCount }: PaginationProps = JSON.parse(paginationJson);

  return { cities: res.data, TotalPageCount };
};
