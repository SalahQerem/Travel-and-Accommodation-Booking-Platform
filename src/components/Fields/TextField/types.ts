import { TextFieldProps as MuiTextFieldProps } from "@mui/material/TextField";

export type TextFieldProps = Omit<MuiTextFieldProps, "name"> & {
  name: string;
};
