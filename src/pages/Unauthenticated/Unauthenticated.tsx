import lock from "@/animation/unauthenticated.json";
import KeyIcon from "@mui/icons-material/Key";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Lottie from "lottie-react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Unauthenticated: FC = () => {
  const navigate = useNavigate();

  const goToLoginPage = () => navigate("/auth/login");

  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "grey.100",
      }}
    >
      <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
        <Lottie animationData={lock} />
        <Typography
          variant="h2"
          sx={{ color: "grey.700", textAlign: "center", mt: -3 }}
          fontSize={{ xs: "h4.fontSize", md: "h3.fontSize", xl: "h2.fontSize" }}
          fontWeight={500}
        >
          Authentication Required
        </Typography>
        <Button
          startIcon={<KeyIcon />}
          onClick={goToLoginPage}
          size="large"
          variant="outlined"
          sx={{ mt: 3 }}
        >
          Login
        </Button>
      </Stack>
    </Grid>
  );
};

export default Unauthenticated;
