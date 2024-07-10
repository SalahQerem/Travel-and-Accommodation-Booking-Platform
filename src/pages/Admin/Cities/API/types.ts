export interface AddCityRequest {
  name: string;
  description: string;
}

export interface DeleteCityRequest {
  id: string;
}

export interface UpdateCityRequest {
  id: string;
  name: string;
  description: string;
}
