import { FC } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LocationProps } from "./types";

const InteractiveMap: FC<LocationProps> = ({
  latitude,
  longitude,
  popupLabel,
  ...rest
}) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={false}
      {...rest}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]}>
        <Popup>{popupLabel}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default InteractiveMap;
