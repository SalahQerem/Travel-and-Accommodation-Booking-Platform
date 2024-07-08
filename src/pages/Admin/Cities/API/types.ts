import { City } from "@/types";

export interface GetCitiesResponse extends Array<City> {}

export interface AddCityRequest {
  name: string;
  description: string;
}

export interface DeleteCityRequest {
  id: string;
}
