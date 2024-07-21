import { StackProps } from "@mui/material/Stack";
import React from "react";

export interface UnexpectedErrorProps {
  error: {
    message?: string;
    stack?: string;
  };
  resetErrorBoundary: (...args: unknown[]) => void;
}

export interface ContainerStackProps extends StackProps {
  isProduction?: boolean;
}

export interface ErrorDetailProps {
  isErrorMessage?: boolean;
  isErrorStack?: boolean;
  children: React.ReactElement;
}
