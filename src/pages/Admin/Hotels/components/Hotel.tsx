import InteractiveMap from "@/components/InteractiveMap";
import useGetHotelDetailsAPI from "@/pages/HotelDetails/hooks/useGetHotelDetailsAPI";
import { LoadingButton } from "@mui/lab";
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
import useDeleteHotelAPI from "../hooks/useDeleteHotelAPI";
import styles from "../styles.module.css";
import { HotelProps } from "../types";

const Hotel: FC<HotelProps> = ({ hotel }) => {
  const { name, starRating, description, hotelType, latitude, longitude, id } =
    hotel;

  const { deleteHotel, isPending } = useDeleteHotelAPI();
  const { hotel: hotelDetails } = useGetHotelDetailsAPI(id);

  const handleDelete = () => {
    deleteHotel({ hotelId: id, cityId: hotelDetails?.cityId! });
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
            <LoadingButton
              variant="text"
              color="error"
              loading={isPending}
              onClick={handleDelete}
              sx={{ minWidth: 20 }}
            >
              <Trash color={isPending ? "transparent" : "#ee6b6e"} />
            </LoadingButton>
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
