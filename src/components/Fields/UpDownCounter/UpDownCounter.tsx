import { IconButton, Stack } from "@mui/material";
import { Minus, Plus } from "lucide-react";
import NumericInput from "../NumericField";
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
      <NumericInput
        max={max}
        min={min}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        value={value}
        sx={{ width: 50 }}
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
