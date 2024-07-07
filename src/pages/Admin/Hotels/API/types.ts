export interface Hotel {
  id: number;
  name: string;
  description: string;
  hotelType: number;
  starRating: number;
  latitude: number;
  longitude: number;
}

export interface GetHotelsResponse extends Array<Hotel> {}

export interface GetHotelsResponseWithTotalPagesCount {
  hotels: Array<Hotel>;
  TotalPageCount: number;
}

export interface AddHotelRequest {}
