import { Dispatch, SetStateAction } from "react";
import { Reservation, SearchForReservationsRequest } from "./API/types";

export type CounterName = "adults" | "children" | "numberOfRooms";

export interface Counter {
  name: CounterName;
  label: string;
  min?: number;
}

export interface ReservationProps {
  reservation: Reservation;
}

export interface SearchFormProps {
  setSearchQuery?: Dispatch<SetStateAction<SearchForReservationsRequest>>;
  isFetching?: boolean;
}

export interface QueryObj {
  [index: string]: string | number;
}
