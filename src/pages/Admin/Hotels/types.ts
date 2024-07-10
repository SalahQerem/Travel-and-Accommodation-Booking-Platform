import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { GetHotelsResponseWithTotalPagesCount, Hotel } from "./API/types";

export interface HotelProps {
  hotel: Hotel;
  handleUpdateHotel: (hotel: Hotel) => void;
  handleOpenConfirmDeleteDialog: (hotel: Hotel) => void;
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

export interface UpdateHotelDialogProps {
  isOpen: boolean;
  hotelToUpdate: Hotel;
  handleCloseUpdateHotelDialog: () => void;
  refetchHotels: (
    options?: RefetchOptions
  ) => Promise<
    QueryObserverResult<GetHotelsResponseWithTotalPagesCount, Error>
  >;
}

export interface UpdateHotelFormProps {
  hotelToUpdate: Hotel;
  handleCloseUpdateHotelDialog: () => void;
  refetchHotels: (
    options?: RefetchOptions
  ) => Promise<
    QueryObserverResult<GetHotelsResponseWithTotalPagesCount, Error>
  >;
}
