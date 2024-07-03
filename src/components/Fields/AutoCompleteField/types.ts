import { AutocompleteProps as MuiAutocompleteProps } from "@mui/material/Autocomplete";

export interface BaseAutoCompleteItem extends Record<string, any> {}

export interface AutocompleteFieldProps<T extends BaseAutoCompleteItem>
  extends Omit<
    MuiAutocompleteProps<T, boolean, boolean, boolean>,
    "renderInput"
  > {
  name: string;
  placeholder: string;
}
