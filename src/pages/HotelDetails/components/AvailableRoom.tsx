import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { AvailableRoomProps } from "../types";
import { Baby, UsersRound } from "lucide-react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const AvailableRoom: FC<AvailableRoomProps> = ({ room }) => {
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
    <Stack key={roomId + amenity.name} direction="row" gap={1}>
      <CheckCircleIcon color="success" />
      <Typography
        variant="subtitle2"
        color="text.secondary"
        textTransform="capitalize"
      >
        {amenity.name}
      </Typography>
    </Stack>
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
        <Stack direction="row" flexWrap="wrap" gap={2}>
          {renderAmenities}
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          sx={{ m: "auto" }}
          endIcon={<AddShoppingCartIcon />}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default AvailableRoom;
