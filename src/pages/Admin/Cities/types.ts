import { GetCitiesResponse } from "@/services/API/types";
import { City } from "@/types";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

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
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<GetCitiesResponse, Error>>;
}

export interface AddCityFormProps {
  cityToUpdate: City;
  handleCloseCityFormDialog: () => void;
  refetchCities: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<GetCitiesResponse, Error>>;
}
