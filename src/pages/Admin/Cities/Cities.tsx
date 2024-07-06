import StyledContainer from "@/containers/StyledContainer";
import routeHOC from "@/routes/HOCs/routeHOC";

const Cities = () => {
  return <StyledContainer></StyledContainer>;
};

const withRouteHoC = routeHOC({
  title: "Cities",
  pageAccessName: "Cities",
});

export default withRouteHoC(Cities);
