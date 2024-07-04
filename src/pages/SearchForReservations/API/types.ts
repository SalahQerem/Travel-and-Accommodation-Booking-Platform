import { SearchState } from "@/features/SearchQuery/types";

export interface SearchForReservationsRequest extends SearchState {}

export interface Amenity {
  id: number;
  name: string;
  description: string;
}

export interface Reservation {
  hotelId: number;
  hotelName: string;
  starRating: number;
  latitude: number;
  longitude: number;
  roomPrice: number;
  roomType: string;
  cityName: string;
  roomPhotoUrl: string;
  discount: number;
  amenities: Array<Amenity>;
}

export interface SearchForReservationsResponse extends Array<Reservation> {}
