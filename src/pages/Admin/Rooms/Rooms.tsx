import routeHOC from "@/routes/HOCs/routeHOC";

const Rooms = () => {
  return <div></div>;
};

const withRouteHoC = routeHOC({
  title: "Rooms",
  pageAccessName: "Rooms",
});

export default withRouteHoC(Rooms);
