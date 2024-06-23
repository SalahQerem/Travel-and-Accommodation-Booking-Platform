import StyledContainer from "@/containers/StyledContainer";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useGetHotelDetailsAPI from "./hooks/useGetHotelDetailsAPI";
import BlockUI from "@/containers/BlockUI";

const HotelDetails = () => {
  const { hotelId } = useParams();

  const { hotel, isFetching } = useGetHotelDetailsAPI(hotelId!);

  console.log(hotel);

  if (isFetching) return <BlockUI />;
  return (
    <StyledContainer>
      <Typography>{hotelId}</Typography>
    </StyledContainer>
  );
};

export default HotelDetails;
