import BlockUI from "@/containers/BlockUI";
import { Container, Grid, Typography } from "@mui/material";
import useGetTrendingDestinationsAPI from "../hooks/useGetTrendingDestinationsAPI";
import Destination from "./Destination";

const TrendingDestinations = () => {
  const { trendingDestinations, isFetching } = useGetTrendingDestinationsAPI();

  const renderTrendingDestinations = trendingDestinations?.map(
    (destination, index) => (
      <Grid item key={destination.cityId} xs={12} md={6} xl={index > 1 ? 4 : 6}>
        <Destination destination={destination} />
      </Grid>
    )
  );

  if (isFetching) return <BlockUI />;

  return (
    <Container id="trending destinations" sx={{ py: { xs: 2, sm: 4 } }}>
      <Typography
        component="h2"
        variant="h4"
        fontWeight={600}
        color="text.primary"
        sx={{ my: 2 }}
      >
        Trending Destinations
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {renderTrendingDestinations}
      </Grid>
    </Container>
  );
};

export default TrendingDestinations;
