import StyledContainer from "@/containers/StyledContainer";
import routeHOC from "@/routes/HOCs/routeHOC";

const Hotels = () => {
  return <StyledContainer></StyledContainer>;
};

const withRouteHoC = routeHOC({
  title: "Hotels",
  pageAccessName: "Hotels",
});

export default withRouteHoC(Hotels);
