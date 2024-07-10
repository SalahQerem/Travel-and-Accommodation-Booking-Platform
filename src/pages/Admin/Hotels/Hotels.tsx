import ConfirmActionDialog from "@/components/ConfirmActionDialog";
import { defaultRequestQuery, paginationOptions } from "@/constants";
import BlockUI from "@/containers/BlockUI";
import StyledContainer from "@/containers/StyledContainer";
import useGetHotelDetailsAPI from "@/pages/HotelDetails/hooks/useGetHotelDetailsAPI";
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
import { Plus, Search } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { Hotel as HotelType } from "./API/types";
import AddHotelDialog from "./components/AddHotelDialog";
import Hotel from "./components/Hotel";
import UpdateHotelDialog from "./components/UpdateHotelDialog";
import { defaultHotel } from "./constants";
import useDeleteHotelAPI from "./hooks/useDeleteHotelAPI";
import useGetHotelsAPI from "./hooks/useGetHotelsAPI";

const Hotels = () => {
  const [isAddHotelDialogOpen, setIsAddHotelDialogOpen] =
    useState<boolean>(false);
  const [isUpdateHotelDialogOpen, setIsUpdateHotelDialogOpen] =
    useState<boolean>(false);
  const [hotelToUpdate, setHotelToUpdate] = useState<HotelType>(defaultHotel);
  const [nameToSearch, setNameToSearch] = useState<string>("");
  const [requestQuery, setRequestQuery] =
    useState<RequestQuery>(defaultRequestQuery);
  const [hotelToDelete, setHotelToDelete] = useState(defaultHotel);
  const [isConfirmDeleteDialogOpen, setIsConfirmDeleteDialogOpen] =
    useState<boolean>(false);

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

  const handleSearchForHotel = () => {
    setRequestQuery({ ...requestQuery, name: nameToSearch });
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

  const handleOpenConfirmDeleteDialog = (hotel: HotelType) => {
    setHotelToDelete(hotel);
    setIsConfirmDeleteDialogOpen(true);
  };
  const handleCloseConfirmDeleteDialog = () => {
    setIsConfirmDeleteDialogOpen(false);
  };

  const { hotels, TotalPageCount, refetchHotels, isFetching } =
    useGetHotelsAPI(requestQuery);
  const { deleteHotel, isPending } = useDeleteHotelAPI(
    refetchHotels,
    handleCloseConfirmDeleteDialog
  );
  const { hotel: hotelDetails } = useGetHotelDetailsAPI(hotelToDelete.id);

  const handleDelete = () => {
    deleteHotel({ hotelId: hotelToDelete.id, cityId: hotelDetails?.cityId! });
  };

  const renderHotels = hotels.map((hotel) => (
    <Grid item xs={12} md={6} key={hotel.id}>
      <Hotel
        hotel={hotel}
        handleUpdateHotel={handleUpdateHotel}
        handleOpenConfirmDeleteDialog={handleOpenConfirmDeleteDialog}
      />
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
              <TextField
                placeholder="Search by name"
                value={nameToSearch}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  if (event.target.value) setNameToSearch(event.target.value);
                  else setRequestQuery({ ...requestQuery, name: "" });
                }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSearchForHotel}
                disabled={requestQuery.name === nameToSearch}
                endIcon={<Search />}
              >
                Search
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleOpenAddHotelDialog}
                endIcon={<Plus />}
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
        <ConfirmActionDialog
          isOpen={isConfirmDeleteDialogOpen}
          title="Delete Hotel Room"
          description={`Are you sure you want to delete a ${hotelToDelete.name} hotel`}
          handleClose={handleCloseConfirmDeleteDialog}
          actions={[
            {
              text: "Yes, Sure!",
              onClick: handleDelete,
              variant: "contained",
              loading: isPending,
              size: "small",
            },
            {
              text: "Cancel",
              onClick: handleCloseConfirmDeleteDialog,
              variant: "outlined",
              size: "small",
            },
          ]}
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
