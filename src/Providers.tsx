import { PropsWithChildren } from "react";
import SaferThemeProvider from "./style/SaferThemeProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import saferQueryClient from "@/config/TanstackQuery/queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={saferQueryClient}>
      <SaferThemeProvider>{children}</SaferThemeProvider>
      <ReactQueryDevtools
        initialIsOpen={false}
        position="left"
        buttonPosition="bottom-left"
      />
    </QueryClientProvider>
  );
};

export default Providers;
