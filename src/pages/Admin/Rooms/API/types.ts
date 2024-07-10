import { Room } from "@/types";

export interface GetHotelRoomsResponse extends Array<Room> {}

export interface AddRoomRequest {
  hotelId: string;
  roomNumber: string;
  cost: number;
}

export interface DeleteRoomRequest {
  hotelId: string;
  roomId: string;
}
