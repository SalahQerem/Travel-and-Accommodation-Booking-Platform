import { TextFieldProps } from "@mui/material/TextField";

export type NumericInputProps = TextFieldProps & {
  min?: number;
  max?: number;
};
