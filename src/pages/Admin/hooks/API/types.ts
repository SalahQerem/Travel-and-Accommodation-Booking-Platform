import { City, Hotel } from "@/types";

export interface GetCitiesResponse extends Array<City> {}

export interface GetHotelsResponse extends Array<Hotel> {}

export interface GetHotelsResponseWithTotalPagesCount {
  hotels: Array<Hotel>;
  TotalPageCount: number;
}
