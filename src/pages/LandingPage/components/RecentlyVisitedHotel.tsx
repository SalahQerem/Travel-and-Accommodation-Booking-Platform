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
import dayjs from "dayjs";
import { MapPin, University } from "lucide-react";
import { FC } from "react";
import { RecentlyVisitedHotelProps } from "../types";
import { Link } from "react-router-dom";

const RecentlyVisitedHotel: FC<RecentlyVisitedHotelProps> = ({ hotel }) => {
  const {
    hotelName,
    cityName,
    starRating,
    thumbnailUrl,
    visitDate,
    priceLowerBound,
    priceUpperBound,
    hotelId,
  } = hotel;

  const visitedDay = dayjs(visitDate).format("YYYY-MM-DD");

  return (
    <Card>
      <CardMedia
        component="img"
        alt="Premium Choice image"
        height="350"
        image={thumbnailUrl}
      />
      <CardContent>
        <Stack direction="row" gap={2} alignItems="center" mb={2}>
          <Typography gutterBottom variant="h5" component="h3" m={0}>
            {hotelName}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {visitedDay}
          </Typography>
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
          <Typography variant="h6" color="red">
            <Typography
              variant="h6"
              component="span"
              fontSize={14}
              color="text.secondary"
              mr={1}
            >
              {priceUpperBound}$ -
            </Typography>
            {priceLowerBound}$
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

export default RecentlyVisitedHotel;
