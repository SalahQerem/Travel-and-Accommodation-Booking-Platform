import { AxiosBaseError } from "@/types/axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import { QueryCache, QueryClient } from "@tanstack/react-query";

const saferQueryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      const errorMessage = extractErrorMessage(error as AxiosBaseError);
      console.error(`Something went wrong: ${errorMessage}`);
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
