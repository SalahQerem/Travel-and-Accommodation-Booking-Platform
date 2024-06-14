import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Highlights from "./components/Hignlights";
import LogoCollection from "./components/LogoCollection";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FeaturedDeals from "./components/FeaturedDeals";
import TrendingDestinations from "./components/TrendingDestinations";

const LandingPage = () => {
  return (
    <Box>
      <Box
        id="header"
        sx={(theme) => ({
          backgroundImage:
            theme.palette.mode === "light"
              ? "linear-gradient(180deg, #CEE5FD, #FFF)"
              : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
          backgroundSize: "100% 45%",
          backgroundRepeat: "no-repeat",
        })}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <Stack spacing={2} sx={{ width: { xs: "100%", sm: "80%" } }}>
            <Typography
              variant="h1"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
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
              top-tier customer service and unbeatable deals. Make your next
              trip unforgettable with&nbsp;
              <Typography component="span" color="primary" fontWeight={600}>
                Safer
              </Typography>
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignSelf="center"
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
            >
              {/* <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                aria-label="Enter your email address"
                placeholder="Your email address"
                inputProps={{
                  autoComplete: "off",
                  "aria-label": "Enter your email address",
                }}
              /> */}
              <Button variant="contained" color="primary">
                Start Booking now
              </Button>
            </Stack>
            <Typography
              variant="caption"
              textAlign="center"
              sx={{ opacity: 0.8 }}
            >
              By clicking &quot;Start now&quot; you agree to our&nbsp;
              <Link href="#" color="primary">
                Terms & Conditions
              </Link>
              .
            </Typography>
          </Stack>
        </Container>
      </Box>
      <FeaturedDeals />
      <TrendingDestinations />
      <Features />
      <Divider />
      <LogoCollection />
      <Testimonials />
      <Divider />
      <Highlights />
      <Divider />
      <Pricing />
      <Divider />
      <FAQ />
      <Divider />
    </Box>
  );
};

export default LandingPage;
