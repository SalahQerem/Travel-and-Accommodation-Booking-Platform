export interface FeaturedDeal {
  hotelId: number;
  originalRoomPrice: number;
  discount: number;
  finalPrice: number;
  cityName: string;
  hotelName: string;
  hotelStarRating: number;
  title: string;
  description: string;
  roomPhotoUrl: string;
}

export interface GetFeaturesDealsResponse extends Array<FeaturedDeal> {}

export interface TrendingDestination {
  cityId: number;
  cityName: string;
  countryName: string;
  description: string;
  thumbnailUrl: string;
}

export interface GetTrendingDestinationsResponse
  extends Array<TrendingDestination> {}

export interface Amenity {
  id: number;
  name: string;
  description: string;
}

export interface PremiumChoice {
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

export interface GetPremiumChoicesResponse extends Array<PremiumChoice> {}
