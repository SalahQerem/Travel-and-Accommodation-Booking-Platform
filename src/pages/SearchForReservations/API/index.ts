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
  sort,
  starRate,
}: SearchForReservationsRequest) => {
  const res = await axiosInstance.get<SearchForReservationsResponse>(
    `/home/search?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&city=${city}&starRate=${starRate}&sort=${sort}&numberOfRooms=${numberOfRooms}&adults=${adults}&children=${children}`
  );
  return res.data;
};
