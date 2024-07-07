import { Hotel } from "./API/types";

export interface HotelProps {
  hotel: Hotel;
}

export interface AddHotelDialogProps {
  isOpen: boolean;
  onClose: () => void;
}
