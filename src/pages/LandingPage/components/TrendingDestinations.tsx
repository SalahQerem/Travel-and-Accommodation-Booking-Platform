import BlockUI from "@/containers/BlockUI";
import useGetTrendingDestinationsAPI from "../hooks/useGetTrendingDestinationsAPI";

const TrendingDestinations = () => {
  const { trendingDestinations, isFetching } = useGetTrendingDestinationsAPI();
  if (isFetching) return <BlockUI />;
  console.log(trendingDestinations);
  return <div></div>;
};

export default TrendingDestinations;
