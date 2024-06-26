import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { AmenityProps } from "./types";

const Amenity: FC<AmenityProps> = ({ name }) => {
  return (
    <Stack direction="row" gap={1}>
      <CheckCircleIcon color="success" />
      <Typography
        variant="subtitle2"
        color="text.secondary"
        textTransform="capitalize"
      >
        {name}
      </Typography>
    </Stack>
  );
};

export default Amenity;
