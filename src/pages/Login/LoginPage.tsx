import { Card, Container, Stack } from "@mui/material";
import loginImg from "@/assets/images/login.png";
import useMediaQuery from "@/hooks/useMediaQuery";

const LoginPage = () => {
  const { isMobile } = useMediaQuery();
  return (
    <Container sx={{ py: { xs: 4, sm: 8 }, height: "100vh" }}>
      <Stack
        direction={isMobile ? "column" : "row"}
        height="100%"
        borderRadius={"10px"}
        sx={{ overflow: "hidden" }}
      >
        <Card sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
          <Stack justifyContent="center" alignItems="center" height="100%">
            <img src={loginImg} alt="booking" width="80%" />
          </Stack>
        </Card>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ bgcolor: (theme) => theme.palette.primary.main }}
        >
          <img src={loginImg} alt="booking" width="50%" />
        </Stack>
      </Stack>
    </Container>
  );
};

export default LoginPage;
