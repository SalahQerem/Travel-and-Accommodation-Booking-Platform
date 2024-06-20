import loginImg from "@/assets/images/login.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Card, Container, Grid, Stack } from "@mui/material";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  const { isTabletOrLess } = useMediaQuery();

  return (
    <Container
      sx={{ py: { xs: 4, sm: 8 }, maxWidth: { lg: 1400 }, height: "100vh" }}
    >
      <Grid
        container
        height="100%"
        borderRadius={"10px"}
        sx={{ overflow: "hidden" }}
      >
        {!isTabletOrLess && (
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                height: "100%",
              }}
            >
              <Stack justifyContent="center" alignItems="center" height="100%">
                <img src={loginImg} alt="booking" width="65%" />
              </Stack>
            </Card>
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          <Stack
            justifyContent="center"
            alignItems="center"
            height="100%"
            sx={{ bgcolor: (theme) => theme.palette.primary.main }}
          >
            <LoginForm />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;