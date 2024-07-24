import { Room } from "@/types";
import { Review } from "./API/types";

export interface ReviewProps {
  review: Review;
}

export interface AvailableRoomProps {
  room: Room;
  setRoomToAddToCart: (room: Room) => void;
  handleOpenAddRoomToCartDialog: () => void;
}

export interface AddRoomToCartDialogProps {
  isOpen: boolean;
  roomToAddToCart: Room;
  handleCloseAddRoomToCartDialog: () => void;
}
