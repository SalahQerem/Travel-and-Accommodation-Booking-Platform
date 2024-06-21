import TextField from "@mui/material/TextField";
import { FC } from "react";
import { NumericInputProps } from "./types";

const NumericInput: FC<NumericInputProps> = (props) => {
  const { max, min } = props;

  return (
    <TextField
      {...props}
      type="number"
      inputProps={{
        inputMode: "numeric",
        pattern: "[0-9]*",
        "aria-valuemax": max,
        "aria-valuemin": min,
      }}
      InputProps={{
        inputProps: {
          max,
          min,
        },
      }}
    />
  );
};

export default NumericInput;
