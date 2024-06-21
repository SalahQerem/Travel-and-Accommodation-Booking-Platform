import { Container } from "@mui/material";
import SearchForm from "./components/SearchForm";

const SearchForReservations = () => {
  return (
    <Container sx={{ pb: 90, pt: 20 }}>
      <SearchForm />
    </Container>
  );
};

export default SearchForReservations;
