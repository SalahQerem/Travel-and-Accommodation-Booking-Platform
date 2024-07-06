import PaginationPageSizeSelectMenu from "@/components/PaginationPageSizeSelectMenu";
import BlockUI from "@/containers/BlockUI";
import StyledContainer from "@/containers/StyledContainer";
import routeHOC from "@/routes/HOCs/routeHOC";
import {
  Container,
  Grid,
  Pagination,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { GetHotelsRequestQuery } from "./API/types";
import Hotel from "./components/Hotel";
import { defaultRequestQuery } from "./constants";
import useGetHotelsAPI from "./hooks/useGetHotelsAPI";

const Hotels = () => {
  const [requestQuery, setRequestQuery] =
    useState<GetHotelsRequestQuery>(defaultRequestQuery);

  const { hotels, TotalPageCount, isFetching } = useGetHotelsAPI(requestQuery);

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    setRequestQuery({ ...requestQuery, pageNumber: value });
  };

  const handleLimitChange = (event: SelectChangeEvent) => {
    setRequestQuery({
      ...requestQuery,
      pageSize: parseInt(event.target.value),
    });
  };

  const renderHotels = hotels?.map((hotel) => (
    <Grid item xs={12} md={6} key={hotel.id}>
      <Hotel hotel={hotel} />
    </Grid>
  ));

  if (isFetching) return <BlockUI />;

  return (
    <StyledContainer>
      <Container sx={{ pt: 14 }}>
        <Stack gap={2}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h4" component="h1">
              Hotels
            </Typography>
            <Stack>
              <PaginationPageSizeSelectMenu
                value={requestQuery.pageSize as any as string}
                onChange={handleLimitChange}
              />
            </Stack>
          </Stack>
          <Grid container spacing={2}>
            {renderHotels}
          </Grid>
        </Stack>
        <Stack justifyContent="center" alignItems="center" my={5}>
          <Pagination
            count={TotalPageCount}
            page={requestQuery.pageNumber}
            onChange={handlePageChange}
          />
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
