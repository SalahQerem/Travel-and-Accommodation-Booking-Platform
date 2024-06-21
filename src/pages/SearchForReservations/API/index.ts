import { axiosInstance } from "@/config/axios.config";
import {
  SearchForReservationsRequest,
  SearchForReservationsResponse,
} from "./types";

export const searchForReservationsAPI = async ({
  adults,
  checkInDate,
  checkOutDate,
  city,
  children,
  numberOfRooms,
}: SearchForReservationsRequest) => {
  const res = await axiosInstance.get<SearchForReservationsResponse>(
    `/home/search?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&city=${city}&numberOfRooms=${numberOfRooms}&adults=${adults}&children=${children}`
  );
  return res.data;
};
