import { axiosInstance } from "@/config/axios.config";
import { GetFeaturesDealsResponse } from "./types";

export const getFeaturedDealsAPI = async () => {
  const res = await axiosInstance.get<GetFeaturesDealsResponse>(
    "/home/featured-deals"
  );
  return res.data;
};
