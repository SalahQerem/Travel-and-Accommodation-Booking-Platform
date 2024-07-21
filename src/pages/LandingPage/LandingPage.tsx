import SearchForm from "@/components/SearchForm";
import StyledContainer from "@/containers/StyledContainer";
import routeHOC from "@/routes/HOCs/routeHOC";
import { Container, Link, Stack, Typography } from "@mui/material";
import FeaturedDeals from "./components/FeaturedDeals";
import RecentlyVisitedHotels from "./components/RecentlyVisitedHotels";
import TrendingDestinations from "./components/TrendingDestinations";
import styles from "./style.module.css";
import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    throw new Error("I crashed!");
  }, []);

  return (
    <StyledContainer id="header" minHeight="auto">
      <Container sx={{ pt: 20 }}>
        <Stack
          spacing={2}
          mb={5}
          sx={{ width: { xs: "100%", sm: "80%" }, mx: "auto" }}
        >
          <Typography variant="h1" className={styles.headerTitle}>
            Explore Our Latest&nbsp;
            <Typography component="span" variant="h1" color="primary">
              Booking&nbsp;
            </Typography>
            Services
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
          >
            Discover and book tailored services with&nbsp;
            <Typography component="span" color="primary" fontWeight={600}>
              Safer
            </Typography>
            . From vacation rentals to event venues, enjoy a seamless booking
            experience. Plan your next adventure with confidence, supported by
            top-tier customer service and unbeatable deals. Make your next trip
            unforgettable with&nbsp;
            <Typography component="span" color="primary" fontWeight={600}>
              Safer
            </Typography>
          </Typography>
        </Stack>
        <SearchForm />
        <Typography
          variant="caption"
          component="p"
          textAlign="center"
          sx={{ opacity: 0.8 }}
          mt={2}
        >
          By clicking &quot;Search&quot; you agree to our&nbsp;
          <Link href="#" color="primary">
            Terms & Conditions
          </Link>
          .
        </Typography>
      </Container>
      <FeaturedDeals />
      <TrendingDestinations />
      <RecentlyVisitedHotels />
    </StyledContainer>
  );
};

const withRouteHoC = routeHOC({
  title: "Home",
  pageAccessName: "Home",
});

export default withRouteHoC(LandingPage);
