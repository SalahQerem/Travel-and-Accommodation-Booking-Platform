export interface City {
  id: number;
  name: string;
  description: string;
}

export interface GetCitiesResponse extends Array<City> {}

export interface GetCitiesResponseWithTotalPagesCount {
  cities: Array<City>;
  TotalPageCount: number;
}
