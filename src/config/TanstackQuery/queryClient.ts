import { QueryClient, QueryCache } from "@tanstack/react-query";

const saferQueryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      // const errorMessage = extractErrorMessage(error as AxiosBaseError)
      console.error(`Something went wrong: ${error}`);
    },
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: 60 * 60 * 1000, // 1 hour
    },
  },
});

export default saferQueryClient;
