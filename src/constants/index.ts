import { PaginationLimitOption, RequestQuery } from "@/types";

export const defaultRequestQuery: RequestQuery = {
  name: "",
  searchQuery: "",
  pageSize: 10,
  pageNumber: 1,
};

export const paginationOptions: Array<PaginationLimitOption> = [
  { name: 5, value: 5 },
  { name: 10, value: 10 },
  { name: 15, value: 15 },
  { name: 20, value: 20 },
];
