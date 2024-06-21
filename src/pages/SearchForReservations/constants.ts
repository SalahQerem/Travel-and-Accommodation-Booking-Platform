import { Counter } from "./types";

export const initialValues = {
  checkInDate: (() => {
    const nextDate = new Date();
    nextDate.setDate(new Date().getDate() + 1);
    return nextDate.toLocaleDateString("en-CA");
  })(),
  checkOutDate: (() => {
    const nextDate = new Date();
    nextDate.setDate(new Date().getDate() + 2);
    return nextDate.toLocaleDateString("en-CA");
  })(),
  city: "",
  numberOfRooms: 1,
  adults: 2,
  children: 0,
  sort: "",
  starRate: 0,
};

export const counters: Array<Counter> = [
  {
    name: "adults",
    label: "Adults",
    min: 1,
  },
  {
    name: "children",
    label: "Children",
  },
  {
    name: "numberOfRooms",
    label: "Rooms",
    min: 1,
  },
];
