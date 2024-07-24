export interface QueryObj {
  [index: string]: string | number;
}

export interface NavigationItem {
  id: string;
  label: string;
  isVisible: boolean;
  to?: string;
}

export interface PaginationProps {
  CurrentPage: number;
  TotalPageCount: number;
  TotalItemCount: number;
  PageSize: number;
}

export interface RequestQuery {
  [index: string]: string | number;
  name: string;
  searchQuery: string;
  pageNumber: number;
  pageSize: number;
}

export interface PaginationLimitOption {
  name: number;
  value: number;
}

export interface City {
  [index: string]: string;
  id: string;
  name: string;
  description: string;
}

export interface Amenity {
  name: string;
  description: string;
}

export interface Room {
  roomId: string;
  roomNumber: string;
  roomPhotoUrl: string;
  roomType: string;
  capacityOfAdults: number;
  capacityOfChildren: number;
  roomAmenities: Array<Amenity>;
  price: number;
  availability: boolean;
}

export interface Hotel {
  [index: string]: string | number;
  id: string;
  name: string;
  description: string;
  hotelType: string;
  starRating: number;
  latitude: number;
  longitude: number;
}
