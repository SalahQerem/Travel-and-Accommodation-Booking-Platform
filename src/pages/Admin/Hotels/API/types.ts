import { Hotel } from "@/types";

export interface AddHotelRequest extends Omit<Hotel, "id"> {
  cityId: string;
}

export interface DeleteHotelRequest {
  cityId: string;
  hotelId: string;
}

export interface UpdateHotelRequest extends Hotel {}
