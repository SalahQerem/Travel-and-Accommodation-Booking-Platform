import PaginationPageSizeSelectMenu from "@/components/PaginationPageSizeSelectMenu";
import { defaultRequestQuery } from "@/constants";
import BlockUI from "@/containers/BlockUI";
import StyledContainer from "@/containers/StyledContainer";
import routeHOC from "@/routes/HOCs/routeHOC";
import { RequestQuery } from "@/types";
import {
  Button,
  Container,
  Grid,
  Pagination,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import AddHotelDialog from "./components/AddHotelDialog";
import Hotel from "./components/Hotel";
import useGetHotelsAPI from "./hooks/useGetHotelsAPI";

const Hotels = () => {
  const [isAddHotelDialogOpen, setIsAddHotelDialogOpen] =
    useState<boolean>(false);
  const [requestQuery, setRequestQuery] =
    useState<RequestQuery>(defaultRequestQuery);

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

  const handleOpenAddHotelDialog = () => {
    setIsAddHotelDialogOpen(true);
  };
  const handleCloseAddHotelDialog = () => {
    setIsAddHotelDialogOpen(false);
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
            <Stack direction="row" gap={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleOpenAddHotelDialog}
              >
                Add Hotel
              </Button>
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
        <AddHotelDialog
          isOpen={isAddHotelDialogOpen}
          onClose={handleCloseAddHotelDialog}
        />
      </Container>
    </StyledContainer>
  );
};

const withRouteHoC = routeHOC({
  title: "Hotels",
  pageAccessName: "Hotels",
});

export default withRouteHoC(Hotels);
