import { Container, Grid } from "@mui/material";
import SearchForm from "./components/SearchForm";
import useSearchForReservationsAPI from "./hooks/useSearchForReservationsAPI";
import Reservation from "./components/Reservation";
import { initialValues } from "./constants";
import { SearchForReservationsRequest } from "./API/types";
import { useState } from "react";

const SearchForReservations = () => {
  const [searchQuery, setSearchQuery] =
    useState<SearchForReservationsRequest>(initialValues);

  const { reservations, isFetching } = useSearchForReservationsAPI(searchQuery);

  const renderReservations = reservations?.map((reservation) => (
    <Grid item key={reservation.hotelId} xs={6}>
      <Reservation reservation={reservation} />
    </Grid>
  ));

  return (
    <Container sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 } }}>
      <SearchForm setSearchQuery={setSearchQuery} isFetching={isFetching} />
      <Grid container spacing={2} justifyContent="center" mt={2}>
        {renderReservations}
      </Grid>
    </Container>
  );
};

export default SearchForReservations;
