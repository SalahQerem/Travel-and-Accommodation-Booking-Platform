import { PropsWithChildren } from "react";
import SaferThemeProvider from "./style/SaferThemeProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import saferQueryClient from "@/config/queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import saferStore from "@/store/store";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={saferStore}>
      <QueryClientProvider client={saferQueryClient}>
        <SaferThemeProvider>{children}</SaferThemeProvider>
        <ReactQueryDevtools
          initialIsOpen={false}
          position="left"
          buttonPosition="bottom-left"
        />
      </QueryClientProvider>
    </Provider>
  );
};

export default Providers;
