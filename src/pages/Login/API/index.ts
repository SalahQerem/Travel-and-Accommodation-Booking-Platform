import { axiosInstance } from "@/config/axios.config";
import { LoginPayload, loginResponse } from "./types";

export const loginAPI = async (payload: LoginPayload) => {
  const res = await axiosInstance.post<loginResponse>("/auth/authenticate", {
    ...payload,
  });

  return res.data;
};
