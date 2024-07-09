import { defaultRequestQuery } from "@/constants";
import BlockUI from "@/containers/BlockUI";
import StyledContainer from "@/containers/StyledContainer";
import routeHOC from "@/routes/HOCs/routeHOC";
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
import { Hotel } from "../Hotels/API/types";
import useGetHotelsAPI from "../Hotels/hooks/useGetHotelsAPI";
import { defaultSelectedHotel } from "./constants";
import useGetHotelRoomsAPI from "./hooks/useGetHotelRoomsAPI";
import Room from "./components/Room";
import AddRoomDialog from "./components/AddRoomDialog";

const Rooms = () => {
  const [isAddRoomDialogOpen, setIsAddRoomDialogOpen] =
    useState<boolean>(false);

  const { hotels, isFetching } = useGetHotelsAPI({
    ...defaultRequestQuery,
    pageSize: 200,
  });

  const [selectedHotel, setSelectedHotel] = useState<Hotel>(
    hotels?.at(0) ?? defaultSelectedHotel
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

  const handleSelectHotel = (
    _: unknown,
    newOption: NonNullable<string | Hotel> | (string | Hotel)[] | null
  ) => {
    if (newOption && typeof newOption !== "string" && !Array.isArray(newOption))
      setSelectedHotel(newOption);
  };

  const renderRooms = rooms?.map((room) => (
    <Grid item key={room.roomId} xs={12} sm={6} md={4}>
      <Room room={room} />
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
                id="combo-box-demo"
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
    </StyledContainer>
  );
};

const withRouteHoC = routeHOC({
  title: "Rooms",
  pageAccessName: "Rooms",
});

export default withRouteHoC(Rooms);
