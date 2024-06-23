import StyledContainer from "@/containers/StyledContainer";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useGetHotelDetailsAPI from "./hooks/useGetHotelDetailsAPI";
import BlockUI from "@/containers/BlockUI";
import useGetHotelGalaryAPI from "./hooks/useGetHotelGalaryAPI";
import useGetHotelReviewsAPI from "./hooks/useGetHotelReviewsAPI";

const HotelDetails = () => {
  const { hotelId } = useParams();

  const { hotel, isFetchingHotel } = useGetHotelDetailsAPI(hotelId!);
  const { galary, isFetchingGalary } = useGetHotelGalaryAPI(hotelId!);
  const { reviews, isFetchingReviews } = useGetHotelReviewsAPI(hotelId!);

  let isLoading = isFetchingHotel || isFetchingGalary || isFetchingReviews;
  if (isLoading) return <BlockUI />;
  return (
    <StyledContainer>
      <Typography>{hotelId}</Typography>
    </StyledContainer>
  );
};

export default HotelDetails;
