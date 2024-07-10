import BlockUI from "@/containers/BlockUI";
import { Container, Grid, Typography } from "@mui/material";
import useGetRencentlyVisitedHotelsAPI from "../hooks/useGetRencentlyVisitedHotelsAPI";
import RecentlyVisitedHotel from "./RecentlyVisitedHotel";

const RecentlyVisitedHotels = () => {
  const { rencentlyVisitedHotels, isFetching } =
    useGetRencentlyVisitedHotelsAPI();

  const renderRecentlyVisitedHotels = rencentlyVisitedHotels.map((hotel) => (
    <Grid item key={hotel.hotelId} xs={6}>
      <RecentlyVisitedHotel hotel={hotel} />
    </Grid>
  ));

  if (isFetching) return <BlockUI />;

  return (
    <Container id="recently visited hotels" sx={{ py: { xs: 2, sm: 4 } }}>
      <Typography
        component="h2"
        variant="h4"
        fontWeight={600}
        color="text.primary"
        sx={{ my: 2 }}
      >
        Recently Visited Hotels
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {renderRecentlyVisitedHotels}
      </Grid>
    </Container>
  );
};

export default RecentlyVisitedHotels;
