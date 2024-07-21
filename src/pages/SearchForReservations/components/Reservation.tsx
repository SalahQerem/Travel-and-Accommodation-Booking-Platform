import Amenity from "@/components/Amenity";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { MapPin, University } from "lucide-react";
import { FC } from "react";
import { ReservationProps } from "../types";
import { Link } from "react-router-dom";

const Reservation: FC<ReservationProps> = ({ reservation }) => {
  const {
    roomPhotoUrl,
    hotelName,
    cityName,
    starRating,
    roomPrice,
    discount,
    roomType,
    amenities,
    hotelId,
  } = reservation;

  const renderAmenities = amenities.map((amenity) => (
    <Amenity key={amenity.id + amenity.name} name={amenity.name} />
  ));

  return (
    <Card>
      <CardMedia
        component="img"
        alt="Premium Choice image"
        height="350"
        image={roomPhotoUrl}
      />
      <CardContent>
        <Stack direction="row" gap={2} alignItems="center" mb={2}>
          <Typography gutterBottom variant="h5" component="h3" m={0}>
            {hotelName}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {roomType}
          </Typography>
        </Stack>
        <Stack direction="row" flexWrap="wrap" gap={2}>
          {renderAmenities}
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mt={1}
        >
          <Stack direction="row" alignItems="center" gap={1}>
            <MapPin size={20} />
            <Typography variant="h6" color="text.secondary">
              {cityName}
            </Typography>
          </Stack>
          <Rating name="hotel star rating" value={starRating} readOnly />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mt={1}
        >
          <Stack direction="row" alignItems="center" gap={1}>
            <University size={20} />
            <Typography variant="h6" color="text.secondary">
              {hotelName}
            </Typography>
          </Stack>
          <Typography variant="h6" color="text.secondary">
            <Typography
              variant="h6"
              component="span"
              color="red"
              fontSize={14}
              mr={1}
            >
              {discount * 100}% OFF
            </Typography>
            {roomPrice}$
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          component={Link}
          to={`/me/hotel/${hotelId}`}
          sx={{ m: "auto" }}
        >
          Show more details
        </Button>
      </CardActions>
    </Card>
  );
};

export default Reservation;
