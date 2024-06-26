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
import { Link } from "react-router-dom";

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
    hotelId,
  } = deal;

  return (
    <Card sx={{ maxWidth: 370, mb: 2, mx: "auto" }}>
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
          <Rating name="deal star rating" value={hotelStarRating} readOnly />
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
          component={Link}
          to={`hotel/${hotelId}`}
          sx={{ m: "auto" }}
        >
          Show more details
        </Button>
      </CardActions>
    </Card>
  );
};

export default Deal;
