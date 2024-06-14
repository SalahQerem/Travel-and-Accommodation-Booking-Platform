import { axiosInstance } from "@/config/axios.config";
import {
  GetFeaturesDealsResponse,
  GetTrendingDestinationsResponse,
} from "./types";

export const getFeaturedDealsAPI = async () => {
  const res = await axiosInstance.get<GetFeaturesDealsResponse>(
    "/home/featured-deals"
  );
  return res.data;
};

export const getTrendingDestinationsAPI = async () => {
  const res = await axiosInstance.get<GetTrendingDestinationsResponse>(
    "/home/destinations/trending"
  );
  return res.data;
};
