import Container from "@mui/material/Container";
import useGetFeaturedDealsAPI from "./hooks/useGetFeaturedDealsAPI";
import BlockUI from "@/containers/BlockUI";
import Slider from "react-slick";
import Deal from "./Deal";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  adaptiveHeight: true,
  slidesToShow: 3,
  // autoplay: true,
};

const FeaturedDeals = () => {
  const { featuredDeals, isFetching } = useGetFeaturedDealsAPI();

  const renderFeaturedDeals = featuredDeals?.map((deal) => (
    <Deal key={deal.hotelId} deal={deal} />
  ));

  if (isFetching) return <BlockUI />;

  return (
    <Container id="features deals" sx={{ py: { xs: 8, sm: 16 } }}>
      <Slider {...settings}>{renderFeaturedDeals}</Slider>
    </Container>
  );
};

export default FeaturedDeals;
