import Alert, { AlertProps } from "@mui/material/Alert";
import { forwardRef } from "react";

const AnharAlert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
});

AnharAlert.displayName = "Alert";

export default AnharAlert;
