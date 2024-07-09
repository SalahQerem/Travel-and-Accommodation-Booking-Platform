import { Room } from "@/types";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { GetHotelRoomsResponse } from "./API/types";
import { Hotel } from "../Hotels/API/types";

export interface RoomProps {
  room: Room;
}

export interface AddRoomDialogProps {
  isOpen: boolean;
  hotels: Array<Hotel>;
  handleCloseAddRoomDialog: () => void;
  refetchRooms: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<GetHotelRoomsResponse, Error>>;
}

export interface AddRoomFormProps {
  hotels: Array<Hotel>;
  handleCloseAddRoomDialog: () => void;
  refetchRooms: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<GetHotelRoomsResponse, Error>>;
}
