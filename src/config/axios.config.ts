import axios, { AxiosRequestConfig } from "axios";

const getDefaultAxiosSettings = (): AxiosRequestConfig => {
  const headers: Record<string, string> = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  return { headers };
};

const defaultAxiosSettings = getDefaultAxiosSettings();

export const axiosInstance = axios.create({
  // baseURL: import.meta.env.VITE_API_URL,
  baseURL:
    "https://app-hotel-reservation-webapi-uae-dev-001.azurewebsites.net/api",
  ...defaultAxiosSettings,
});

export const axiosFormData = axios.create({
  // baseURL: import.meta.env.VITE_API_URL,
  baseURL:
    "https://app-hotel-reservation-webapi-uae-dev-001.azurewebsites.net/api",
  headers: {
    ...defaultAxiosSettings.headers,
    Accept: "*/*",
    "Content-Type": "multipart/form-data",
  },
});
