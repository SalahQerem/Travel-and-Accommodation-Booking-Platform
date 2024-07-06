import { axiosInstance } from "@/config/axios.config";
import { GetHotelsResponse } from "./types";
import { QueryObj } from "@/types";
import { getUrlQueryString } from "@/utils/urlQueryParams";

export const getHotelsAPI = async (query: QueryObj) => {
  const requestUrl = getUrlQueryString("/hotels", query);

  const res = await axiosInstance.get<GetHotelsResponse>(requestUrl);
  return res.data;
};
