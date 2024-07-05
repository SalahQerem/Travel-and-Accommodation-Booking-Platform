import routeHOC from "@/routes/HOCs/routeHOC";

const Cities = () => {
  return <div></div>;
};

const withRouteHoC = routeHOC({
  title: "Cities",
  pageAccessName: "Cities",
});

export default withRouteHoC(Cities);
