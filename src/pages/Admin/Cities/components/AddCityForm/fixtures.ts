import { GetCitiesResponse } from "@/services/API/types";
import {
  QueryObserverResult,
  QueryObserverSuccessResult,
  RefetchOptions,
} from "@tanstack/react-query";

export const mockRefetchCities: (
  options?: RefetchOptions
) => Promise<QueryObserverResult<GetCitiesResponse, Error>> = async (_) => {
  // Simulate fetching data with a delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Mocked response data
  const response: GetCitiesResponse = [
    {
      id: "1",
      name: "Jenin",
      description: "Jenin",
    },
    {
      id: "2",
      name: "Ramallah",
      description: "Ramallah",
    },
  ];

  // Mocked QueryObserverResult
  const result: QueryObserverResult<GetCitiesResponse, Error> &
    QueryObserverSuccessResult<GetCitiesResponse, Error> = {
    data: response,
    error: null,
    failureCount: 0,
    isError: false,
    isFetched: true,
    isFetchedAfterMount: true,
    isFetching: false,
    isLoading: false,
    isRefetching: false,
    isSuccess: true,
    refetch: async () =>
      ({ data: response, error: null, isSuccess: true } as QueryObserverResult<
        GetCitiesResponse,
        Error
      >),
    status: "success",
    isPending: false,
    isLoadingError: false,
    isRefetchError: false,
    dataUpdatedAt: Date.now(),
    errorUpdatedAt: Date.now(),
    failureReason: null,
    errorUpdateCount: 0,
    isInitialLoading: false,
    isPlaceholderData: false,
    isPaused: false,
    isStale: false,
    fetchStatus: "fetching",
  };

  return result;
};
