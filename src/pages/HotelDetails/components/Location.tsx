import { FC } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LocationProps } from "../types";

const Location: FC<LocationProps> = ({ latitude, longitude, hotelName }) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "350px", width: "100%", padding: ".5rem" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]}>
        <Popup>{hotelName}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Location;
