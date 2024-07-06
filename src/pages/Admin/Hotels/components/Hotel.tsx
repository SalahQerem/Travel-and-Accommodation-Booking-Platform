import { Card, Rating, Typography } from "@mui/material";
import { FC } from "react";
import { HotelProps } from "../types";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

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
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "200px", width: "200px", padding: ".5rem" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[latitude, longitude]}>
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
    </Card>
  );
};

export default Hotel;
