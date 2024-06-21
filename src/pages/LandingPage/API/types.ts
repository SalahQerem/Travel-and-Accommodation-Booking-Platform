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

export interface RecentlyVisitedHotel {
  hotelId: number;
  hotelName: string;
  starRating: number;
  visitDate: string;
  cityName: string;
  thumbnailUrl: string;
  priceLowerBound: number;
  priceUpperBound: number;
}

export interface GetRecentlyVisitedHotelsResponse
  extends Array<RecentlyVisitedHotel> {}
