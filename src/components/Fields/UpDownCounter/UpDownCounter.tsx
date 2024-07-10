import { IconButton, Stack, TextField } from "@mui/material";
import { Minus, Plus } from "lucide-react";
import { FC } from "react";
import { UpDownCounterProps } from "./types";

const UpDownCounter: FC<UpDownCounterProps> = ({
  value,
  min = 0,
  max = 99,
  onChange,
}) => {
  return (
    <Stack direction="row" gap={2} alignItems="center">
      <IconButton
        color="primary"
        onClick={() => onChange(Math.max(value - 1, 0))}
        disabled={value <= min}
      >
        <Minus />
      </IconButton>
      <TextField
        name="latitude"
        type="number"
        placeholder="Latitude"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        sx={{ width: 50 }}
        inputProps={{
          inputMode: "numeric",
          pattern: "[0-9]*",
          "aria-valuemax": max,
          "aria-valuemin": min,
        }}
      />
      <IconButton
        color="primary"
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
      >
        <Plus />
      </IconButton>
    </Stack>
  );
};

export default UpDownCounter;
