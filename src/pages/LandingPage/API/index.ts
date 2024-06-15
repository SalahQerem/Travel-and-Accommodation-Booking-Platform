import { axiosInstance } from "@/config/axios.config";
import {
  GetFeaturesDealsResponse,
  GetPremiumChoicesResponse,
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

export const getPremiumChoicesAPI = async () => {
  const res = await axiosInstance.get<GetPremiumChoicesResponse>(
    "/home/search"
  );
  return res.data;
};
