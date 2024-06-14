import { textSlicer } from "@/utils";
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
import { FC } from "react";
import { DealProps } from "../types";
import { MapPin, University } from "lucide-react";

const Deal: FC<DealProps> = ({ deal }) => {
  const {
    roomPhotoUrl,
    hotelName,
    description,
    title,
    hotelStarRating,
    cityName,
    finalPrice,
    originalRoomPrice,
  } = deal;

  return (
    <Card sx={{ maxWidth: 370, mb: 2, mx: "auto" }}>
      {/* <CardActionArea> */}
      <CardMedia
        component="img"
        alt="Features Deal image"
        height="220"
        image={roomPhotoUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {textSlicer(description)}
        </Typography>
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
          <Rating name="read-only" value={hotelStarRating} readOnly />
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
          <Typography variant="h6" color="red">
            <Typography
              variant="h6"
              component="span"
              color="text.secondary"
              fontSize={14}
              mr={1}
              sx={{ textDecoration: "line-through" }}
            >
              {originalRoomPrice}$
            </Typography>
            {finalPrice}$
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          sx={{ m: "auto" }}
        >
          Book now
        </Button>
      </CardActions>
      {/* </CardActionArea> */}
    </Card>
  );
};

export default Deal;
