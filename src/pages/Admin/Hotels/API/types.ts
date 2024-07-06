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

export interface GetHotelsRequestQuery {
  [index: string]: string | number;
  name: string;
  searchQuery: string;
  pageNumber: number;
  pageSize: number;
}
