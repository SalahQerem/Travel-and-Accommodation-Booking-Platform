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
