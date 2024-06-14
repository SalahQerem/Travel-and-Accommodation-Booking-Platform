import { axiosInstance } from "@/config/axios.config";
import { GetTrendingDestinationsResponse } from "./types";

export const getTrendingDestinationsAPI = async () => {
  const res = await axiosInstance.get<GetTrendingDestinationsResponse>(
    "/home/featured-deals"
  );
  return res.data;
};
