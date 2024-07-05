import routeHOC from "@/routes/HOCs/routeHOC";

const Hotels = () => {
  return <div></div>;
};

const withRouteHoC = routeHOC({
  title: "Hotels",
  pageAccessName: "Hotels",
});

export default withRouteHoC(Hotels);
