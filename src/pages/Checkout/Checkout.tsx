import StyledContainer from "@/containers/StyledContainer";
import { selectCartItems } from "@/features/Cart";
import { useAppSelector } from "@/store";
import { Container, Typography } from "@mui/material";

const Checkout = () => {
  const cart = useAppSelector(selectCartItems);

  console.log(cart);
  return (
    <StyledContainer>
      <Container sx={{ py: 14 }}>
        <Typography variant="h5">Checkout page</Typography>
      </Container>
    </StyledContainer>
  );
};

export default Checkout;
