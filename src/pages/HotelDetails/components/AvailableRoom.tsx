import Amenity from "@/components/Amenity";
import { selectIsItemInCart } from "@/features/Cart";
import { useAppSelector } from "@/store";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
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
import { FC } from "react";
import { AvailableRoomProps } from "../types";

const AvailableRoom: FC<AvailableRoomProps> = ({
  room,
  setRoomToAddToCart,
  handleOpenAddRoomToCartDialog,
}) => {
  const {
    roomPhotoUrl,
    capacityOfAdults,
    capacityOfChildren,
    price,
    roomAmenities,
    roomType,
    roomId,
    roomNumber,
  } = room;

  const isItemInCart = useAppSelector((state) =>
    selectIsItemInCart(state, roomNumber)
  );

  const handleAddToCart = () => {
    handleOpenAddRoomToCartDialog();
    setRoomToAddToCart(room);
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
          endIcon={!isItemInCart && <AddShoppingCartIcon />}
          onClick={handleAddToCart}
          disabled={isItemInCart}
        >
          {isItemInCart ? "Already Added" : "Add to Cart"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default AvailableRoom;
