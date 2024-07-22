import UnexpectedError from "@/pages/UnexpectedError";
import { FC, PropsWithChildren, useState } from "react";
import {
  ErrorBoundary as ErrorBoundaryComponent,
  ErrorBoundaryProps as ErrorBoundaryComponentProps,
} from "react-error-boundary";

const ErrorBoundary: FC<PropsWithChildren> = ({ children }) => {
  const [someKey, setSomeKey] = useState(null);

  const resetErrorBoundary: ErrorBoundaryComponentProps["onReset"] = () =>
    setSomeKey(null);

  const logErrorToService: ErrorBoundaryComponentProps["onError"] = (
    error,
    info
  ) => {
    console.error("Caught an error:", error, info);
  };

  return (
    <ErrorBoundaryComponent
      FallbackComponent={UnexpectedError}
      onError={logErrorToService}
      onReset={resetErrorBoundary} // reset the state of your app here
      resetKeys={[someKey]} // when changed, will trigger a reset of the error boundary.
    >
      {children}
    </ErrorBoundaryComponent>
  );
};

export default ErrorBoundary;
