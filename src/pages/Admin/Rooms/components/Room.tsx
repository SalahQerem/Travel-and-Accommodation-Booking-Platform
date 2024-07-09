import Amenity from "@/components/Amenity";
import { LoadingButton } from "@mui/lab";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Baby, Trash, UsersRound } from "lucide-react";
import { FC } from "react";
import useDeleteRoomAPI from "../hooks/useDeleteRoomAPI";
import { RoomProps } from "../types";

const Room: FC<RoomProps> = ({ room, selectedHotelId }) => {
  const {
    roomPhotoUrl,
    capacityOfAdults,
    capacityOfChildren,
    price,
    roomAmenities,
    roomType,
    roomId,
  } = room;

  const { deleteRoom, isPending } = useDeleteRoomAPI();

  const handleDelete = () => {
    deleteRoom({ hotelId: selectedHotelId, roomId });
  };

  const renderAmenities = roomAmenities.map((amenity) => (
    <Amenity key={roomId + amenity.name} name={amenity.name} />
  ));

  return (
    <Card>
      <CardMedia
        component="img"
        alt="Features Deal image"
        height="220"
        image={roomPhotoUrl}
      />
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography gutterBottom variant="h5" component="h3" m={0}>
            {roomType} Room
          </Typography>
          <Typography variant="body1" component="span" color="red">
            {price}$/night
          </Typography>
        </Stack>
        <Stack direction="row" gap={1} mb={2}>
          <Stack direction="row" gap={1}>
            <UsersRound />
            <Typography
              variant="subtitle2"
              color="text.secondary"
              textTransform="capitalize"
            >
              {capacityOfAdults}
            </Typography>
          </Stack>
          <Stack direction="row" gap={1}>
            <Baby />
            <Typography
              variant="subtitle2"
              color="text.secondary"
              textTransform="capitalize"
            >
              {capacityOfChildren}
            </Typography>
          </Stack>
        </Stack>
        <Stack gap={2}>{renderAmenities}</Stack>
      </CardContent>
      <CardActions>
        <LoadingButton
          size="small"
          variant="contained"
          color="primary"
          sx={{ m: "auto" }}
          loading={isPending}
          onClick={handleDelete}
          endIcon={<Trash size={20} />}
        >
          Delete
        </LoadingButton>
      </CardActions>
    </Card>
  );
};

export default Room;
