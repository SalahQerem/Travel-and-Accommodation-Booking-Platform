import StyledContainer from "@/containers/StyledContainer";
import { selectCartItems } from "@/features/Cart";
import routeHOC from "@/routes/HOCs/routeHOC";
import { useAppSelector } from "@/store";
import { Container, Grid, Typography } from "@mui/material";
import CartItem from "./components/CartItem";
import CheckoutForm from "./components/CheckoutForm";

const Checkout = () => {
  const cart = useAppSelector(selectCartItems);

  const renderCart = cart.map((cartItem) => (
    <Grid item key={cartItem.roomId} xs={12} md={6}>
      <CartItem room={cartItem} />
    </Grid>
  ));

  return (
    <StyledContainer>
      <Container sx={{ py: 14 }}>
        <Grid container spacing={2}>
          <Grid item container xs={12} sm={6} md={8} spacing={2}>
            {cart.length ? (
              renderCart
            ) : (
              <Typography variant="h5" textAlign="center" width="100%" mt={3}>
                Yout Cart is empty ☹️
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CheckoutForm />
          </Grid>
        </Grid>
      </Container>
    </StyledContainer>
  );
};

const withRouteHoC = routeHOC({
  title: "Checkout",
  pageAccessName: "Checkout",
});

export default withRouteHoC(Checkout);
