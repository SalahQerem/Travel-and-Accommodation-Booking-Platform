import StyledContainer from "@/containers/StyledContainer";
import { Container, Grid } from "@mui/material";
import { useState } from "react";
import { SearchForReservationsRequest } from "./API/types";
import Reservation from "./components/Reservation";
import SearchForm from "./components/SearchForm";
import { initialValues } from "./constants";
import useSearchForReservationsAPI from "./hooks/useSearchForReservationsAPI";

const SearchForReservations = () => {
  const [searchQuery, setSearchQuery] =
    useState<SearchForReservationsRequest>(initialValues);

  const { reservations, isFetching } = useSearchForReservationsAPI(searchQuery);

  const renderReservations = reservations?.map((reservation) => (
    <Grid item key={reservation.hotelId} xs={12} md={6}>
      <Reservation reservation={reservation} />
    </Grid>
  ));

  return (
    <StyledContainer>
      <Container sx={{ pt: 15, pb: 10 }}>
        <SearchForm setSearchQuery={setSearchQuery} isFetching={isFetching} />
        <Grid container spacing={2} justifyContent="center" mt={2}>
          {renderReservations}
        </Grid>
      </Container>
    </StyledContainer>
  );
};

export default SearchForReservations;
