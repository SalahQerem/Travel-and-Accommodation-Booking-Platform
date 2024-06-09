import axios, { AxiosRequestConfig } from "axios";
import { getSession } from "@/lib/session";

const getDefaultAxiosSettings = (): AxiosRequestConfig => {
  const authToken = getSession();

  const headers: Record<string, string> = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  if (authToken) headers.Authorization = `Bearer ${authToken}`;

  return { headers };
};

const defaultAxiosSettings = getDefaultAxiosSettings();

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  ...defaultAxiosSettings,
});

export const axiosFormData = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    ...defaultAxiosSettings.headers,
    Accept: "*/*",
    "Content-Type": "multipart/form-data",
  },
});
