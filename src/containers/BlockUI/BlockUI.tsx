import { Stack, useTheme } from "@mui/material";
import Modal from "@mui/material/Modal";
import { FC } from "react";
import { SyncLoader } from "react-spinners";

const BlockUI: FC = () => {
  const theme = useTheme();

  return (
    <Modal
      aria-labelledby="suspense-modal"
      aria-describedby="Waiting for data to load"
      open={true}
      style={{ zIndex: 1400 }}
      hideBackdrop
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        height="100vh"
        sx={{
          outline: "none",
          bgcolor: "background.paper",
        }}
      >
        <SyncLoader color={theme.palette.primary.main} />
      </Stack>
    </Modal>
  );
};

export default BlockUI;
