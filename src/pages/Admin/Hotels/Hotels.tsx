import { defaultRequestQuery, paginationOptions } from "@/constants";
import BlockUI from "@/containers/BlockUI";
import StyledContainer from "@/containers/StyledContainer";
import routeHOC from "@/routes/HOCs/routeHOC";
import { PaginationLimitOption, RequestQuery } from "@/types";
import {
  Autocomplete,
  Button,
  Container,
  Grid,
  Pagination,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Hotel as HotelType } from "./API/types";
import AddHotelDialog from "./components/AddHotelDialog";
import Hotel from "./components/Hotel";
import UpdateHotelDialog from "./components/UpdateHotelDialog";
import { defaultHotel } from "./constants";
import useGetHotelsAPI from "./hooks/useGetHotelsAPI";

const Hotels = () => {
  const [isAddHotelDialogOpen, setIsAddHotelDialogOpen] =
    useState<boolean>(false);
  const [isUpdateHotelDialogOpen, setIsUpdateHotelDialogOpen] =
    useState<boolean>(false);
  const [hotelToUpdate, setHotelToUpdate] = useState<HotelType>(defaultHotel);
  const [requestQuery, setRequestQuery] =
    useState<RequestQuery>(defaultRequestQuery);

  const { hotels, TotalPageCount, refetchHotels, isFetching } =
    useGetHotelsAPI(requestQuery);

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    setRequestQuery({ ...requestQuery, pageNumber: value });
  };

  const handleLimitChange = (
    _: unknown,
    newOption:
      | NonNullable<string | PaginationLimitOption>
      | (string | PaginationLimitOption)[]
      | null
  ) => {
    if (newOption && typeof newOption !== "string" && !Array.isArray(newOption))
      setRequestQuery({
        ...requestQuery,
        pageSize: newOption.value,
      });
  };

  const handleOpenAddHotelDialog = () => {
    setIsAddHotelDialogOpen(true);
  };
  const handleCloseAddHotelDialog = () => {
    setIsAddHotelDialogOpen(false);
  };

  const handleUpdateHotel = (hotel: HotelType) => {
    setIsUpdateHotelDialogOpen(true);
    setHotelToUpdate(hotel);
  };
  const handleCloseUpdateHotelDialog = () => {
    setIsUpdateHotelDialogOpen(false);
  };

  const renderHotels = hotels?.map((hotel) => (
    <Grid item xs={12} md={6} key={hotel.id}>
      <Hotel hotel={hotel} handleUpdateHotel={handleUpdateHotel} />
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
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={paginationOptions}
                onChange={handleLimitChange}
                defaultValue={paginationOptions[1]}
                value={{
                  name: requestQuery.pageSize,
                  value: requestQuery.pageSize,
                }}
                sx={{ width: 105 }}
                getOptionLabel={(option) =>
                  (option as PaginationLimitOption).name + ""
                }
                renderInput={(params) => (
                  <TextField
                    name="paginationLimit"
                    placeholder="Limit"
                    {...params}
                  />
                )}
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
          handleCloseAddHotelDialog={handleCloseAddHotelDialog}
          refetchHotels={refetchHotels}
        />
        <UpdateHotelDialog
          isOpen={isUpdateHotelDialogOpen}
          hotelToUpdate={hotelToUpdate}
          refetchHotels={refetchHotels}
          handleCloseUpdateHotelDialog={handleCloseUpdateHotelDialog}
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
