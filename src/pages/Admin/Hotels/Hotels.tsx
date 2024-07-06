import BlockUI from "@/containers/BlockUI";
import StyledContainer from "@/containers/StyledContainer";
import routeHOC from "@/routes/HOCs/routeHOC";
import { useState } from "react";
import { GetHotelsRequestQuery } from "./API/types";
import useGetHotelsAPI from "./hooks/useGetHotelsAPI";
import Hotel from "./components/Hotel";
import { Container, Stack, Typography } from "@mui/material";
import { defaultRequestQuery } from "./constants";

const Hotels = () => {
  const [requestQuery, setRequestQuery] =
    useState<GetHotelsRequestQuery>(defaultRequestQuery);

  const { hotels, isFetching } = useGetHotelsAPI(requestQuery);

  const renderHotels = hotels?.map((hotel) => (
    <Hotel key={hotel.id} hotel={hotel} />
  ));

  if (isFetching) return <BlockUI />;

  return (
    <StyledContainer>
      <Container sx={{ py: 14 }}>
        <Stack gap={2}>
          <Typography variant="h4" component="h1">
            Hotels
          </Typography>
          {renderHotels}
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
