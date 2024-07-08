import StyledContainer from "@/containers/StyledContainer";
import routeHOC from "@/routes/HOCs/routeHOC";

const Rooms = () => {
  return <StyledContainer></StyledContainer>;
};

const withRouteHoC = routeHOC({
  title: "Rooms",
  pageAccessName: "Rooms",
});

export default withRouteHoC(Rooms);
