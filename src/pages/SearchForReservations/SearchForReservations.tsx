import SearchForm from "@/components/SearchForm";
import StyledContainer from "@/containers/StyledContainer";
import { Container, Grid } from "@mui/material";
import Reservation from "./components/Reservation";
import useSearchForReservationsAPI from "./hooks/useSearchForReservationsAPI";
import routeHOC from "@/routes/HOCs/routeHOC";

const SearchForReservations = () => {
  const { reservations, isFetching } = useSearchForReservationsAPI();

  const renderReservations = reservations.map((reservation) => (
    <Grid item key={reservation.hotelId} xs={12} md={6}>
      <Reservation reservation={reservation} />
    </Grid>
  ));

  return (
    <StyledContainer>
      <Container sx={{ pt: 15, pb: 10 }}>
        <SearchForm isInSearchPage={true} isFetching={isFetching} />
        <Grid container spacing={2} justifyContent="center" mt={2}>
          {renderReservations}
        </Grid>
      </Container>
    </StyledContainer>
  );
};

const withRouteHoC = routeHOC({
  title: "Search",
  pageAccessName: "SearchForReservations",
});

export default withRouteHoC(SearchForReservations);
