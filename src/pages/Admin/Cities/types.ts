import { City } from "@/types";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { GetCitiesResponse } from "./API/types";

export interface CityProps {
  city: City;
  handleUpdateCity: (city: City) => void;
  handleOpenConfirmDeleteDialog: (city: City) => void;
}

export interface AddCityDialogProps {
  isOpen: boolean;
  cityToUpdate: City;
  handleCloseCityFormDialog: () => void;
  refetchCities: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<GetCitiesResponse, Error>>;
}

export interface AddCityFormProps {
  cityToUpdate: City;
  handleCloseCityFormDialog: () => void;
  refetchCities: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<GetCitiesResponse, Error>>;
}
