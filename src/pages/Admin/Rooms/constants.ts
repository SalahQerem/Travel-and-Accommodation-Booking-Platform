import { Hotel } from "@/types";

export const defaultSelectedHotel: Hotel = {
  id: "1",
  name: "Plaza",
  description: "",
  hotelType: "",
  starRating: 0,
  latitude: 0,
  longitude: 0,
};

export const initialValues = {
  hotelId: "",
  hotel: { ...defaultSelectedHotel, id: "", name: "" },
  roomNumber: "",
  cost: 0,
};

export const defaultRoom = {
  id: "",
  name: "",
};
