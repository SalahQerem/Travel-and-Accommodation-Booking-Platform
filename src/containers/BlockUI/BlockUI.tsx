import { Stack, useTheme } from "@mui/material";
import Modal from "@mui/material/Modal";
import { SyncLoader } from "react-spinners";

const BlockUI = () => {
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
        sx={{
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
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
