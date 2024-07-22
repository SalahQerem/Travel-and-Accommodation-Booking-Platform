import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { ContainerStack, ErrorDetail, ErrorTypography } from "./styled";
import { UnexpectedErrorProps } from "./types";

const isProduction = false;

const UnexpectedError: FC<UnexpectedErrorProps> = ({
  error = {},
  resetErrorBoundary,
}) => {
  if (isProduction)
    return (
      <ContainerStack gap={2} isProduction>
        <ErrorTypography variant="h4">
          <ErrorOutlineIcon fontSize={"large"} sx={{ m: 10 }} />
          Unexpected Error
        </ErrorTypography>
        <Button
          onClick={resetErrorBoundary}
          variant="contained"
          color="warning"
        >
          Try again
        </Button>
      </ContainerStack>
    );

  return (
    <ContainerStack gap={2} role="alert">
      <Typography variant="h4" fontWeight={500}>
        Unexpected Error: {error?.message ?? JSON.stringify(error)}
      </Typography>
      <ErrorDetail isErrorMessage>
        <Typography>{error?.message}</Typography>
      </ErrorDetail>
      <ErrorDetail isErrorStack>
        <Typography>{error?.stack}</Typography>
      </ErrorDetail>
      <Stack direction="row" justifyContent="center">
        <Button
          onClick={resetErrorBoundary}
          fullWidth={false}
          variant="contained"
          color="warning"
        >
          Try again
        </Button>
      </Stack>
    </ContainerStack>
  );
};

export default UnexpectedError;
