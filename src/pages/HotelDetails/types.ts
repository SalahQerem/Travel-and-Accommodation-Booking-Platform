import { Review, Room } from "./API/types";

export interface ReviewProps {
  review: Review;
}

export interface LocationProps {
  latitude: number;
  longitude: number;
  hotelName: string;
}

export interface AvailableRoomProps {
  room: Room;
}
