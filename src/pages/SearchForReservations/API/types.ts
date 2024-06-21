export interface SearchForReservationsRequest {
  checkInDate?: string;
  checkOutDate?: string;
  city?: string;
  numberOfRooms?: number;
  adults?: number;
  children?: number;
  // sort?: string;
  // starRate?: number;
}

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
