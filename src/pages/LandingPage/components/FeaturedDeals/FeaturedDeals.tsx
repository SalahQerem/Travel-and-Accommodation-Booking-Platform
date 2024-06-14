import Container from "@mui/material/Container";
import useGetFeaturedDealsAPI from "./hooks/useGetFeaturedDealsAPI";
import BlockUI from "@/containers/BlockUI";
import Slider from "react-slick";
import Deal from "./Deal";
import { Typography } from "@mui/material";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  adaptiveHeight: true,
  slidesToShow: 3,
  autoplay: true,
};

const FeaturedDeals = () => {
  const { featuredDeals, isFetching } = useGetFeaturedDealsAPI();

  const renderFeaturedDeals = featuredDeals?.map((deal) => (
    <Deal key={deal.hotelId} deal={deal} />
  ));

  if (isFetching) return <BlockUI />;

  return (
    <Container id="features deals" sx={{ py: { xs: 4, sm: 8 } }}>
      <Typography
        component="h2"
        variant="h4"
        fontWeight={600}
        color="text.primary"
        sx={{ my: 2 }}
      >
        Featured Deals
      </Typography>
      <Slider {...settings}>{renderFeaturedDeals}</Slider>
    </Container>
  );
};

export default FeaturedDeals;
