import BlockUI from "@/containers/BlockUI";
import StyledContainer from "@/containers/StyledContainer";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useGetHotelDetailsAPI from "./hooks/useGetHotelDetailsAPI";
import useGetHotelGalaryAPI from "./hooks/useGetHotelGalaryAPI";
import useGetHotelReviewsAPI from "./hooks/useGetHotelReviewsAPI";
import useGetHotelRoomsAPI from "./hooks/useGetHotelRoomsAPI";

const HotelDetails = () => {
  const { hotelId } = useParams();

  const { hotel, isFetchingHotel } = useGetHotelDetailsAPI(hotelId!);
  const { galary, isFetchingGalary } = useGetHotelGalaryAPI(hotelId!);
  const { reviews, isFetchingReviews } = useGetHotelReviewsAPI(hotelId!);
  const { rooms, isFetchingRooms } = useGetHotelRoomsAPI(hotelId!);

  let isLoading =
    isFetchingHotel || isFetchingGalary || isFetchingReviews || isFetchingRooms;

  if (isLoading) return <BlockUI />;

  return (
    <StyledContainer>
      <Typography>{hotelId}</Typography>
    </StyledContainer>
  );
};

export default HotelDetails;
