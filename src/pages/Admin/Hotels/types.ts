import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { GetHotelsResponseWithTotalPagesCount, Hotel } from "./API/types";

export interface HotelProps {
  hotel: Hotel;
}

export interface AddHotelDialogProps {
  isOpen: boolean;
  handleCloseAddHotelDialog: () => void;
  refetchHotels: (
    options?: RefetchOptions
  ) => Promise<
    QueryObserverResult<GetHotelsResponseWithTotalPagesCount, Error>
  >;
}

export interface AddHotelFormProps {
  refetchHotels: (
    options?: RefetchOptions
  ) => Promise<
    QueryObserverResult<GetHotelsResponseWithTotalPagesCount, Error>
  >;
  handleCloseAddHotelDialog: () => void;
}
