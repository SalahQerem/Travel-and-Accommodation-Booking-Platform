import { useSnackBar } from "@/hooks/useSnackbar";
import UnexpectedError from "@/pages/UnexpectedError";
import { FC, PropsWithChildren, useState } from "react";
import {
  ErrorBoundary as ErrorBoundaryComponent,
  ErrorBoundaryProps,
} from "react-error-boundary";

const ErrorBoundary: FC<PropsWithChildren> = ({ children }) => {
  const { showErrorSnackbar } = useSnackBar();
  const [someKey, setSomeKey] = useState(null);

  const resetErrorBoundary: ErrorBoundaryProps["onReset"] = () =>
    setSomeKey(null);

  const logErrorToService: ErrorBoundaryProps["onError"] = (error) => {
    showErrorSnackbar({ message: `Caught an error: ${error}` });
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
