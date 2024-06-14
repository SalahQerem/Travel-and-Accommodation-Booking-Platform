export interface ITrendingDestination {
  cityId: number;
  cityName: string;
  countryName: string;
  description: string;
  thumbnailUrl: string;
}

export interface GetTrendingDestinationsResponse
  extends Array<ITrendingDestination> {}
