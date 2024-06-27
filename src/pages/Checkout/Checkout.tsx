import StyledContainer from "@/containers/StyledContainer";
import { Container, Typography } from "@mui/material";

const Checkout = () => {
  return (
    <StyledContainer>
      <Container sx={{ py: 14 }}>
        <Typography variant="h5">Checkout page</Typography>
      </Container>
    </StyledContainer>
  );
};

export default Checkout;
