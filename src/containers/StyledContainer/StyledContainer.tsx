import { Box, BoxProps, alpha } from "@mui/material";
import { FC } from "react";

const StyledContainer: FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 250px",
        backgroundRepeat: "no-repeat",
      })}
      minHeight="100vh"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default StyledContainer;
