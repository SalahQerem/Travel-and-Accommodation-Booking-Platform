import InteractiveMap from "@/components/InteractiveMap";
import { Card, Rating, Typography } from "@mui/material";
import { FC } from "react";
import { HotelProps } from "../types";

const Hotel: FC<HotelProps> = ({ hotel }) => {
  const { name, starRating, description, hotelType, latitude, longitude } =
    hotel;
  return (
    <Card sx={{ p: 2 }}>
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
      <Typography variant="h6">{hotelType}</Typography>
      <Typography variant="body2">{description}</Typography>
      <Rating value={starRating} />
      <InteractiveMap
        popupLabel={name!}
        longitude={longitude!}
        latitude={latitude!}
      />
    </Card>
  );
};

export default Hotel;
