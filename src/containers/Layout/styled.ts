import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

export const AppLayoutContainer = styled(Grid, {
  name: "AppLayoutContainer",
})(({ theme }) => ({
  position: "absolute",
  right: 0,
  display: "block",
  overflow: "auto",
  transition: ".25s",
  backgroundColor: theme.palette.grey[50],
  justifyContent: "center",
  alignItems: "center",
}));
