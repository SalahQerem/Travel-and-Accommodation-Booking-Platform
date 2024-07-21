import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { ContainerStackProps, ErrorDetailProps } from "./types";

export const ContainerStack = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "isProduction",
})<ContainerStackProps>(({ theme, isProduction }) => ({
  p: 20,
  ...(isProduction && {
    backgroundColor: theme.palette.background.default,
    justifyContent: "center",
    alignItems: "center",
  }),
}));

export const ErrorTypography = styled(Typography)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const ErrorDetail = styled("pre")<ErrorDetailProps>(
  ({ theme, isErrorMessage, isErrorStack }) => ({
    ...(isErrorMessage && {
      color: theme.palette?.error?.main,
      fontSize: "1.2rem",
      overflow: "auto",
    }),
    ...(isErrorStack && {
      padding: "15px",
      border: "2px solid lightgrey",
      background: theme.palette.grey[200],
      borderRadius: "4px",
      fontSize: "1.1rem",
      overflow: "auto",
    }),
  })
);
