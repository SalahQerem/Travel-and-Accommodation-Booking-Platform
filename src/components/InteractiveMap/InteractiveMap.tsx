import { FC } from "react";
import { LocationProps } from "./types";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const InteractiveMap: FC<LocationProps> = ({
  latitude,
  longitude,
  popupLabel,
}) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "350px", width: "100%", padding: ".5rem" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]}>
        <Popup>{popupLabel}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default InteractiveMap;
