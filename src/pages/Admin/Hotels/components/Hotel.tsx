import InteractiveMap from "@/components/InteractiveMap";
import {
  Button,
  Card,
  CardActions,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { FilePenLine, Trash } from "lucide-react";
import { FC } from "react";
import styles from "../styles.module.css";
import { HotelProps } from "../types";

const Hotel: FC<HotelProps> = ({
  hotel,
  handleUpdateHotel,
  handleOpenConfirmDeleteDialog,
}) => {
  const { name, starRating, description, hotelType, latitude, longitude } =
    hotel;

  const handleUpdate = () => {
    handleUpdateHotel(hotel);
  };

  const handleDelete = () => {
    handleOpenConfirmDeleteDialog(hotel);
  };

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
              Description:
            </Typography>
            {description}
          </Typography>
          <CardActions>
            <Stack
              direction="row"
              gap={2}
              justifyContent="flex-end"
              width="100%"
            >
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={handleDelete}
                endIcon={<Trash size={20} />}
              >
                Delete
              </Button>
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={handleUpdate}
                endIcon={<FilePenLine size={20} />}
              >
                Edit
              </Button>
            </Stack>
          </CardActions>
        </Stack>
        <InteractiveMap
          popupLabel={name}
          longitude={longitude}
          latitude={latitude}
          className={styles.locationContainer}
        />
      </Stack>
    </Card>
  );
};

export default Hotel;
