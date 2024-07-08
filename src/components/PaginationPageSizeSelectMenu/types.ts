import { SelectChangeEvent } from "@mui/material";

export interface SelectProps {
  value: string;
  onChange: (event: SelectChangeEvent) => void;
}
