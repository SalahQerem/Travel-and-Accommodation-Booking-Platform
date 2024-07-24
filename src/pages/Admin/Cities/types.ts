import { City } from "@/types";

export interface CityProps {
  city: City;
  handleUpdateCity: (city: City) => void;
  handleOpenConfirmDeleteDialog: (city: City) => void;
}

export interface AddCityDialogProps {
  isOpen: boolean;
  cityToUpdate: City;
  setCityToUpdate: (city: City) => void;
  handleCloseCityFormDialog: () => void;
}

export interface AddCityFormProps {
  cityToUpdate: City;
  setCityToUpdate: (city: City) => void;
  handleCloseCityFormDialog: () => void;
}
