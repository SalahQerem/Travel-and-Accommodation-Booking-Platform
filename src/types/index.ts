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
