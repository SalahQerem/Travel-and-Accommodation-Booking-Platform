import Amenity from "@/components/Amenity";
import InteractiveMap from "@/components/InteractiveMap";
import BlockUI from "@/containers/BlockUI";
import StyledContainer from "@/containers/StyledContainer";
import routeHOC from "@/routes/HOCs/routeHOC";
import {
  Button,
  Card,
  Container,
  Grid,
  Modal,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import AvailableRoom from "./components/AvailableRoom";
import Review from "./components/Review";
import useGetHotelDetailsAPI from "./hooks/useGetHotelDetailsAPI";
import useGetHotelGalaryAPI from "./hooks/useGetHotelGalaryAPI";
import useGetHotelReviewsAPI from "./hooks/useGetHotelReviewsAPI";
import useGetHotelRoomsAPI from "./hooks/useGetHotelRoomsAPI";
import styles from "./styles.module.css";

const HotelDetails = () => {
  const { hotelId } = useParams();

  const [reviewsCountToDisplay, setReviewsCountToDisplay] = useState(3);
  const [imageToDisplay, setImageToDisplay] = useState<string>("");

  const { hotel, isFetchingHotel } = useGetHotelDetailsAPI(hotelId!);
  const { outdoorImage, squareImages, wideImages, isFetchingGalary } =
    useGetHotelGalaryAPI(hotelId!);
  const { reviews, isFetchingReviews } = useGetHotelReviewsAPI(hotelId!);
  const { rooms, isFetchingRooms } = useGetHotelRoomsAPI(hotelId!);

  const handleIncreaseReviewsCount = () => {
    setReviewsCountToDisplay((prev) => prev + 3);
  };

  const handleSelectGalaryItem = (galaryItemUrl: string) => {
    setImageToDisplay(galaryItemUrl);
  };

  const renderAmenities = hotel?.amenities.map((amenity) => (
    <Amenity key={hotel.hotelName + amenity.name} name={amenity.name} />
  ));

  const renderReviews = reviews
    ?.slice(0, reviewsCountToDisplay)
    .map((review) => <Review key={review.reviewId} review={review} />);

  const renderWideImages = wideImages?.map((galaryItem) => (
    <Grid item key={galaryItem.id} xs={12}>
      <img
        src={galaryItem.url}
        alt={hotel?.hotelName}
        className={styles.hotelImg}
        onClick={() => handleSelectGalaryItem(galaryItem.url)}
      />
    </Grid>
  ));

  const renderSquareImages = squareImages?.map((galaryItem) => (
    <Grid item key={galaryItem.id} xs={12} sm={4}>
      <img
        src={galaryItem.url}
        alt={hotel?.hotelName}
        className={styles.hotelImg}
        onClick={() => handleSelectGalaryItem(galaryItem.url)}
      />
    </Grid>
  ));

  const renderAvailableRooms = rooms?.map((room) => (
    <Grid item key={room.roomId} xs={12} sm={6}>
      <AvailableRoom room={room} />
    </Grid>
  ));

  let isLoading =
    isFetchingHotel || isFetchingGalary || isFetchingReviews || isFetchingRooms;

  if (isLoading) return <BlockUI />;

  return (
    <StyledContainer>
      <Container sx={{ py: 14 }}>
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2 }}>
              <Stack gap={2}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography component="h1" variant="h5">
                    {hotel?.hotelName}
                  </Typography>
                  <Rating value={hotel?.starRating} readOnly />
                </Stack>
                <Typography variant="body1">{hotel?.description}</Typography>
                <Stack gap={1}>
                  <Typography component="h2" variant="h6">
                    Amenities
                  </Typography>
                  {renderAmenities}
                </Stack>
                <InteractiveMap
                  popupLabel={hotel?.hotelName!}
                  longitude={hotel?.longitude!}
                  latitude={hotel?.latitude!}
                  className={styles.locationContainer}
                />
                <Stack gap={1}>
                  <Typography component="h2" variant="h6">
                    Reviews
                  </Typography>
                  {renderReviews}
                  <Button
                    variant="contained"
                    onClick={handleIncreaseReviewsCount}
                    disabled={reviewsCountToDisplay >= reviews!.length}
                  >
                    Load more
                  </Button>
                </Stack>
              </Stack>
            </Card>
          </Grid>
          <Grid item container spacing={3} xs={12} md={8}>
            <Grid container item spacing={1}>
              {outdoorImage && (
                <Grid item xs={12} sm={5.5}>
                  <img
                    src={outdoorImage.url}
                    alt={hotel?.hotelName}
                    className={styles.hotelImg}
                    onClick={() => handleSelectGalaryItem(outdoorImage.url)}
                  />
                </Grid>
              )}
              <Grid container item xs={12} sm={6.5} spacing={1}>
                {renderWideImages}
              </Grid>
              <Grid container item xs={12} spacing={1} justifyContent="center">
                {renderSquareImages}
              </Grid>
            </Grid>

            <Grid container item xs={12} spacing={1} justifyContent="center">
              <Grid item xs={12}>
                <Typography variant="h4" component="h2" textAlign="center">
                  Available Rooms
                </Typography>
              </Grid>
              {renderAvailableRooms}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {imageToDisplay && (
        <Modal
          open={!!imageToDisplay}
          onClose={() => setImageToDisplay("")}
          className={styles.popup}
        >
          <Stack alignItems="center" justifyContent="center" maxWidth="80%">
            <img
              src={imageToDisplay}
              alt={hotel?.hotelName}
              className={styles.popupImage}
            />
          </Stack>
        </Modal>
      )}
    </StyledContainer>
  );
};

const withRouteHoC = routeHOC({
  title: "Hotel Details",
  pageAccessName: "HotelDetails",
});

export default withRouteHoC(HotelDetails);
