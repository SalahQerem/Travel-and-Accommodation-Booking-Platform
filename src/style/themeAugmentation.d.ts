import { LoadingButtonProps } from "@mui/lab/LoadingButton";

declare module "@mui/material/styles" {
  interface Components {
    MuiLoadingButton?: {
      defaultProps?: Partial<LoadingButtonProps>;
      styleOverrides?: {
        root?: (props: { theme: Theme; ownerState: LoadingButtonProps }) => any;
      };
    };
  }
}
