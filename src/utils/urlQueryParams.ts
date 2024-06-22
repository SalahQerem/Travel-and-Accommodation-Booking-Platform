import { QueryObj } from "@/types";

export const getUrlQueryObj = (url: URL): QueryObj => {
  const urlQuery = new URLSearchParams(url.search);
  const queryObj: QueryObj = {};

  urlQuery.forEach((value, key) => {
    queryObj[key] = value;
  });

  return queryObj;
};

export const getUrlQueryString = (baseUrl: string, params: Object) => {
  const searchParams = new URLSearchParams(params as Record<string, string>);
  return `${baseUrl}?${searchParams.toString()}`;
};
