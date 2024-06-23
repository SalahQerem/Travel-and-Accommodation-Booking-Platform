export interface Amenity {
  name: string;
  description: string;
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
  cityId: number;
}
