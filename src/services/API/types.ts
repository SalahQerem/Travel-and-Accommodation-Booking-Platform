import { Amenity, City, Hotel } from "@/types";

export interface GetCitiesResponse extends Array<City> {}

export interface GetHotelsResponse extends Array<Hotel> {}

export interface GetHotelsResponseWithTotalPagesCount {
  hotels: Array<Hotel>;
  TotalPageCount: number;
}

export interface GetHotelDetailsResponse {
  hotelName: string;
  location: string;
  description: string;
  latitude: number;
  longitude: number;
  amenities: Array<Amenity>;
  starRating: number;
  availableRooms: number;
  imageUrl: string;
  cityId: string;
}
