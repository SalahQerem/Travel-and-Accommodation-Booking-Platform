import BlockUI from "@/containers/BlockUI";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Slider from "react-slick";
import useGetFeaturedDealsAPI from "../hooks/useGetFeaturedDealsAPI";
import Deal from "./Deal";

const FeaturedDeals = () => {
  const { isTabletOrLess, isDesktopOrLess } = useMediaQuery();
  const { featuredDeals, isFetching } = useGetFeaturedDealsAPI();

  const renderFeaturedDeals = featuredDeals?.map((deal) => (
    <Deal key={deal.hotelId} deal={deal} />
  ));

  const sliderConfigs = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    adaptiveHeight: true,
    slidesToShow: isTabletOrLess ? 1 : isDesktopOrLess ? 2 : 3,
    autoplay: true,
  };

  if (isFetching) return <BlockUI />;

  return (
    <Container
      id="features deals"
      sx={{ py: { xs: 2, sm: 4 }, overflow: "hidden" }}
    >
      <Typography
        component="h2"
        variant="h4"
        fontWeight={600}
        color="text.primary"
        sx={{ my: 2 }}
      >
        Featured Deals
      </Typography>
      <Slider {...sliderConfigs}>{renderFeaturedDeals}</Slider>
    </Container>
  );
};

export default FeaturedDeals;
