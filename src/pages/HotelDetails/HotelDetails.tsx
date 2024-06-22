import StyledContainer from "@/containers/StyledContainer";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const HotelDetails = () => {
  const { hotelId } = useParams();
  return (
    <StyledContainer>
      <Typography>{hotelId}</Typography>
    </StyledContainer>
  );
};

export default HotelDetails;
