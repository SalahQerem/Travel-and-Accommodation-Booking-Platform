import MuiAutocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useField } from "formik";
import { AutocompleteFieldProps, BaseAutoCompleteItem } from "./types";

const AutocompleteField = <T extends BaseAutoCompleteItem>({
  name,
  placeholder,
  ...rest
}: AutocompleteFieldProps<T>) => {
  const [field, meta] = useField<string>(name);

  const config: Omit<
    AutocompleteFieldProps<T>,
    "renderInput" | "placeholder"
  > = {
    ...field,
    ...rest,
    fullWidth: true,
  };

  let error: boolean;
  let helperText: string;

  if (meta && meta.touched && meta.error) {
    error = true;
    helperText = meta.error;
  }

  return (
    <MuiAutocomplete
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={placeholder}
          name={name}
          helperText={helperText}
          error={error}
          InputProps={{
            ...params.InputProps,
          }}
        />
      )}
      {...config}
    />
  );
};

export default AutocompleteField;
