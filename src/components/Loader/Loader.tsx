import { Stack, useTheme } from "@mui/material";
import { FC } from "react";
import { SyncLoader } from "react-spinners";

const Loader: FC = () => {
  const theme = useTheme();

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100%"
    >
      <SyncLoader color={theme.palette.primary.main} />
    </Stack>
  );
};

export default Loader;
