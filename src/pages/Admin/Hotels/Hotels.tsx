import BlockUI from "@/containers/BlockUI";
import StyledContainer from "@/containers/StyledContainer";
import routeHOC from "@/routes/HOCs/routeHOC";
import { useState } from "react";
import { GetHotelsRequestQuery } from "./API/types";
import useGetHotelsAPI from "./hooks/useGetHotelsAPI";
import Hotel from "./components/Hotel";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { defaultRequestQuery } from "./constants";

const Hotels = () => {
  const [requestQuery, setRequestQuery] =
    useState<GetHotelsRequestQuery>(defaultRequestQuery);

  const { hotels, isFetching } = useGetHotelsAPI(requestQuery);

  const renderHotels = hotels?.map((hotel) => (
    <Grid item xs={12} md={6} key={hotel.id}>
      <Hotel hotel={hotel} />
    </Grid>
  ));

  if (isFetching) return <BlockUI />;

  return (
    <StyledContainer>
      <Container sx={{ py: 14 }}>
        <Stack gap={2}>
          <Typography variant="h4" component="h1">
            Hotels
          </Typography>
          <Grid container spacing={2}>
            {" "}
            {renderHotels}
          </Grid>
        </Stack>
      </Container>
    </StyledContainer>
  );
};

const withRouteHoC = routeHOC({
  title: "Hotels",
  pageAccessName: "Hotels",
});

export default withRouteHoC(Hotels);
