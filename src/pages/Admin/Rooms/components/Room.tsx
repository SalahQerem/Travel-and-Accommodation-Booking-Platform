import { FC } from "react";
import { RoomProps } from "../types";
import Amenity from "@/components/Amenity";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Baby, UsersRound } from "lucide-react";

const Room: FC<RoomProps> = ({ room }) => {
  const {
    roomPhotoUrl,
    capacityOfAdults,
    capacityOfChildren,
    price,
    roomAmenities,
    roomType,
    roomId,
  } = room;

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
        <Button
          size="small"
          variant="contained"
          color="primary"
          sx={{ m: "auto" }}
        >
          Already Added
        </Button>
      </CardActions>
    </Card>
  );
};

export default Room;
