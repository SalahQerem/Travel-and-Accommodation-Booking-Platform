import { axiosInstance } from "@/config/axios.config";
import {
  GetFeaturesDealsResponse,
  GetRecentlyVisitedHotelsResponse,
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

export const getRencentlyVisitedHotelsAPI = async (userId: string) => {
  const res = await axiosInstance.get<GetRecentlyVisitedHotelsResponse>(
    `/home/users/${userId}/recent-hotels`
  );
  return res.data;
};
