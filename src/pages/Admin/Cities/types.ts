import { City } from "@/types";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { GetCitiesResponse } from "./API/types";

export interface CityProps {
  city: City;
}

export interface AddCityDialogProps {
  isOpen: boolean;
  handleCloseAddCityDialog: () => void;
  refetchCities: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<GetCitiesResponse, Error>>;
}

export interface AddCityFormProps {
  handleCloseAddCityDialog: () => void;
  refetchCities: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<GetCitiesResponse, Error>>;
}
