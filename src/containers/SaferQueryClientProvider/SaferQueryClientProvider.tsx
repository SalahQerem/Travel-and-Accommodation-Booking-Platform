import { useSnackBar } from "@/hooks/useSnackbar";
import { AxiosBaseError } from "@/types/axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";

const SaferQueryClientProvider: FC<PropsWithChildren> = ({ children }) => {
  const { showErrorSnackbar } = useSnackBar();
  const saferQueryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        const errorMessage = extractErrorMessage(error as AxiosBaseError);
        showErrorSnackbar({ message: errorMessage });
      },
    }),
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchInterval: 60 * 60 * 1000, // 1 hour
      },
    },
  });
  return (
    <QueryClientProvider client={saferQueryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default SaferQueryClientProvider;
