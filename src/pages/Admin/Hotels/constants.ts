import { Hotel } from "@/types";

export const addHotelInitialValues = {
  name: "",
  description: "",
  hotelType: "",
  starRating: -1,
  latitude: 200,
  longitude: 200,
  city: {
    id: "",
    name: "",
    description: "",
  },
  cityname: "",
};

export const updateHotelInitialValues = {
  name: "",
  description: "",
  hotelType: "",
  starRating: -1,
  latitude: 200,
  longitude: 200,
  city: {
    id: "",
    name: "",
    description: "",
  },
  cityname: "",
};

export const defaultHotel: Hotel = {
  id: "",
  name: "",
  description: "",
  hotelType: "",
  starRating: 0,
  latitude: 0,
  longitude: 0,
};
