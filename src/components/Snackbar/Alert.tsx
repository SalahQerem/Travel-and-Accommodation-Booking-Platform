import Alert, { AlertProps } from "@mui/material/Alert";
import { forwardRef } from "react";

const SaferAlert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
});

SaferAlert.displayName = "Alert";

export default SaferAlert;
