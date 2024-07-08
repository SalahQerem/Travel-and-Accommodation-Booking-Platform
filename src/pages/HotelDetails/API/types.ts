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
  cityId: string;
}

export interface GalaryItem {
  id: string;
  url: string;
}

export interface GetHotelGalaryResponse extends Array<GalaryItem> {}

export interface Review {
  reviewId: number;
  customerName: string;
  rating: number;
  description: string;
}

export interface GetHotelReviewsResponse extends Array<Review> {}

export interface Room {
  roomId: number;
  roomNumber: string;
  roomPhotoUrl: string;
  roomType: string;
  capacityOfAdults: number;
  capacityOfChildren: number;
  roomAmenities: Array<Amenity>;
  price: number;
  availability: boolean;
}

export interface GetHotelRoomsResponse extends Array<Room> {}
