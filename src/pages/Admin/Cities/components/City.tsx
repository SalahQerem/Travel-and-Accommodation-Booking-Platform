import { Card, CardContent, Typography } from "@mui/material";
import { FC } from "react";
import { CityProps } from "../types";
import { textSlicer } from "@/utils";

const City: FC<CityProps> = ({ city }) => {
  const { name, description } = city;
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" mb={2}>
          {name}
        </Typography>
        <Typography>{textSlicer(description)}</Typography>
      </CardContent>
    </Card>
  );
};

export default City;
