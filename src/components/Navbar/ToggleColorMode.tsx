import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Moon, Sun } from "lucide-react";
import { FC } from "react";
import { ToggleColorModeProps } from "./types";

const ToggleColorMode: FC<ToggleColorModeProps> = ({
  mode,
  toggleColorMode,
}) => {
  return (
    <Box sx={{ maxWidth: "32px" }}>
      <Button
        variant="text"
        onClick={toggleColorMode}
        size="small"
        aria-label="button to toggle theme"
      >
        {mode === "dark" ? <Sun fontSize="small" /> : <Moon fontSize="small" />}
      </Button>
    </Box>
  );
};

export default ToggleColorMode;
