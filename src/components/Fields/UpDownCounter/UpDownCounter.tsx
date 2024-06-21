import { IconButton, Stack } from "@mui/material";
import { Minus, Plus } from "lucide-react";
import NumericInput from "../NumericField";
import { FC } from "react";
import { UpDownCounterProps } from "./types";

const UpDownCounter: FC<UpDownCounterProps> = ({ value, onChange }) => {
  return (
    <Stack direction="row" gap={2} alignItems="center">
      <IconButton
        color="primary"
        onClick={() => onChange(Math.max(value - 1, 0))}
        disabled={value < 1}
      >
        <Minus />
      </IconButton>
      <NumericInput
        max={99}
        min={0}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        value={value}
      />
      <IconButton color="primary" onClick={() => onChange(value + 1)}>
        <Plus />
      </IconButton>
    </Stack>
  );
};

export default UpDownCounter;
