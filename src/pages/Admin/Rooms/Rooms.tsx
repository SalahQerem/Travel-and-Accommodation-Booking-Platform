import ConfirmActionDialog from "@/components/ConfirmActionDialog";
import { defaultRequestQuery } from "@/constants";
import BlockUI from "@/containers/BlockUI";
import StyledContainer from "@/containers/StyledContainer";
import routeHOC from "@/routes/HOCs/routeHOC";
import useGetHotelsAPI from "@/services/useGetHotelsAPI";
import { Hotel } from "@/types";
import {
  Autocomplete,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddRoomDialog from "./components/AddRoomDialog";
import Room from "./components/Room";
import { defaultRoom, defaultSelectedHotel } from "./constants";
import useDeleteRoomAPI from "./hooks/useDeleteRoomAPI";
import useGetHotelRoomsAPI from "./hooks/useGetHotelRoomsAPI";

const Rooms = () => {
  const [isAddRoomDialogOpen, setIsAddRoomDialogOpen] =
    useState<boolean>(false);
  const [roomToDelete, setRoomToDelete] = useState(defaultRoom);
  const [isConfirmDeleteDialogOpen, setIsConfirmDeleteDialogOpen] =
    useState<boolean>(false);

  const { hotels, isFetching } = useGetHotelsAPI({
    ...defaultRequestQuery,
    pageSize: 200,
  });

  const [selectedHotel, setSelectedHotel] = useState<Hotel>(
    hotels[0] ?? defaultSelectedHotel
  );

  const { rooms, refetchRooms, isFetchingRooms } = useGetHotelRoomsAPI(
    selectedHotel.id
  );

  const handleOpenAddRoomDialog = () => {
    setIsAddRoomDialogOpen(true);
  };
  const handleCloseAddRoomDialog = () => {
    setIsAddRoomDialogOpen(false);
  };

  const handleOpenConfirmDeleteDialog = () => {
    setIsConfirmDeleteDialogOpen(true);
  };
  const handleCloseConfirmDeleteDialog = () => {
    setIsConfirmDeleteDialogOpen(false);
  };

  const { deleteRoom, isPending } = useDeleteRoomAPI(
    refetchRooms,
    handleCloseConfirmDeleteDialog
  );

  const handleDelete = () => {
    deleteRoom({ hotelId: selectedHotel.id, roomId: roomToDelete.id });
  };

  const handleSelectHotel = (
    _: unknown,
    newOption: NonNullable<string | Hotel> | (string | Hotel)[] | null
  ) => {
    if (newOption && typeof newOption !== "string" && !Array.isArray(newOption))
      setSelectedHotel(newOption);
  };

  const renderRooms = rooms.map((room) => (
    <Grid item key={room.roomId} xs={12} sm={6} md={4}>
      <Room
        room={room}
        setRoomToDelete={setRoomToDelete}
        handleOpenConfirmDeleteDialog={handleOpenConfirmDeleteDialog}
      />
    </Grid>
  ));

  if (isFetching || isFetchingRooms) return <BlockUI />;

  return (
    <StyledContainer>
      <Container sx={{ py: 14 }}>
        <Stack gap={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Typography variant="h4" component="h1">
              Rooms
            </Typography>
            <Stack>
              <Autocomplete
                disablePortal
                size="small"
                options={hotels ?? []}
                onChange={handleSelectHotel}
                value={selectedHotel}
                sx={{ width: 300 }}
                getOptionLabel={(option) => (option as Hotel).name + ""}
                renderInput={(params) => (
                  <TextField name="hotel" placeholder="Hotel" {...params} />
                )}
              />
              <Typography variant="caption" ml={2}>
                Select a Hotel to manage its rooms
              </Typography>
            </Stack>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenAddRoomDialog}
              endIcon={<Plus />}
            >
              Add Room
            </Button>
          </Stack>
          <Grid container spacing={2}>
            {renderRooms}
          </Grid>
        </Stack>
      </Container>
      <AddRoomDialog
        isOpen={isAddRoomDialogOpen}
        hotels={hotels}
        refetchRooms={refetchRooms}
        handleCloseAddRoomDialog={handleCloseAddRoomDialog}
      />
      <ConfirmActionDialog
        isOpen={isConfirmDeleteDialogOpen}
        title="Delete Hotel Room"
        description={`Are you sure you want to delete a ${roomToDelete.name} room`}
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
    </StyledContainer>
  );
};

const withRouteHoC = routeHOC({
  title: "Rooms",
  pageAccessName: "Rooms",
});

export default withRouteHoC(Rooms);
