import { Box, Divider } from "@mui/material";
import LogoCollection from "./components/LogoCollection";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Highlights from "./components/Hignlights";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const LandingPage = () => {
  return (
    <Box sx={{ bgcolor: "background.default" }}>
      <Hero />
      <LogoCollection />
      <Features />
      <Divider />
      <Testimonials />
      <Divider />
      <Highlights />
      <Divider />
      <Pricing />
      <Divider />
      <FAQ />
      <Divider />
      <Footer />
    </Box>
  );
};

export default LandingPage;
