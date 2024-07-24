import { Room } from "@/types";

export const defaultRoom: Room = {
  roomId: "",
  roomNumber: "",
  roomPhotoUrl: "",
  roomType: "",
  capacityOfAdults: 0,
  capacityOfChildren: 0,
  roomAmenities: [],
  price: 0,
  availability: false,
};

export const defaultCheckInDate = (() => {
  const nextDate = new Date();
  nextDate.setDate(new Date().getDate() + 1);
  return nextDate.toLocaleDateString("en-CA");
})();

export const defaultCheckOutDate = (() => {
  const nextDate = new Date();
  nextDate.setDate(new Date().getDate() + 2);
  return nextDate.toLocaleDateString("en-CA");
})();
