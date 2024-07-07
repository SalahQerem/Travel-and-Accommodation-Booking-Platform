import InteractiveMap from "@/components/InteractiveMap";
import {
  Card,
  CardActions,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { FilePenLine, Trash } from "lucide-react";
import { FC } from "react";
import styles from "../styles.module.css";
import { HotelProps } from "../types";

const Hotel: FC<HotelProps> = ({ hotel }) => {
  const { name, starRating, description, hotelType, latitude, longitude } =
    hotel;

  return (
    <Card sx={{ p: 2 }}>
      <Stack direction="row" justifyContent="space-between" gap={3}>
        <Stack gap={2}>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography className={styles.hotelInfo}>
            <Typography variant="body2" component="span">
              Type:
            </Typography>
            {hotelType}
          </Typography>
          <Rating value={starRating} readOnly />
          <Typography>
            <Typography variant="body2" component="span">
              Description:{" "}
            </Typography>
            {description}
          </Typography>
          <CardActions>
            <IconButton>
              <Trash color="#ee6b6e" />
            </IconButton>
            <IconButton>
              <FilePenLine color="black" />
            </IconButton>
          </CardActions>
        </Stack>
        <InteractiveMap
          popupLabel={name!}
          longitude={longitude!}
          latitude={latitude!}
          className={styles.locationContainer}
        />
      </Stack>
    </Card>
  );
};

export default Hotel;
