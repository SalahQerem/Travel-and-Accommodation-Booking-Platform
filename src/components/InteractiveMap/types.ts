import { MapContainerProps } from "react-leaflet";

export interface LocationProps extends MapContainerProps {
  latitude: number;
  longitude: number;
  popupLabel: string;
}
