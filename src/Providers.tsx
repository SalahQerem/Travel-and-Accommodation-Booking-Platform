import saferStore from "@/store/store";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import SaferQueryClientProvider from "./containers/SaferQueryClientProvider";
import SaferThemeProvider from "./style/SaferThemeProvider";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={saferStore}>
      <SaferQueryClientProvider>
        <SaferThemeProvider>{children}</SaferThemeProvider>
        <ReactQueryDevtools
          initialIsOpen={false}
          position="left"
          buttonPosition="bottom-left"
        />
      </SaferQueryClientProvider>
    </Provider>
  );
};

export default Providers;
