import getSaferTheme from "@/style/getSaferTheme";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { SyncLoader } from "react-spinners";

const BlockUI = () => {
  const theme = getSaferTheme("light");
  return (
    <Modal
      aria-labelledby="suspense-modal"
      aria-describedby="Waiting for data to load"
      open={true}
      style={{ zIndex: 1400 }}
      hideBackdrop
    >
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          outline: "none",
        }}
      >
        <SyncLoader color={theme.palette!.primary as string} />
      </Box>
    </Modal>
  );
};

export default BlockUI;
