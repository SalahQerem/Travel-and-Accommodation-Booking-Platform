import { axiosInstance } from "@/config/axios.config";
import {
  SearchForReservationsRequest,
  SearchForReservationsResponse,
} from "./types";
import { getUrlQueryString } from "@/utils/urlQueryParams";

export const searchForReservationsAPI = async (
  searchPayload: SearchForReservationsRequest
) => {
  const urlPath = getUrlQueryString("/home/search", searchPayload);

  const res = await axiosInstance.get<SearchForReservationsResponse>(urlPath);
  return res.data;
};
