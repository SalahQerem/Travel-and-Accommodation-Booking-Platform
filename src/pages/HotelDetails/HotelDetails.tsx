import StyledContainer from "@/containers/StyledContainer";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useGetHotelDetailsAPI from "./hooks/useGetHotelDetailsAPI";
import BlockUI from "@/containers/BlockUI";
import useGetHotelGalaryAPI from "./hooks/useGetHotelGalaryAPI";

const HotelDetails = () => {
  const { hotelId } = useParams();

  const { hotel, isFetchingHotel } = useGetHotelDetailsAPI(hotelId!);
  const { galary, isFetchingGalary } = useGetHotelGalaryAPI(hotelId!);

  if (isFetchingHotel || isFetchingGalary) return <BlockUI />;
  return (
    <StyledContainer>
      <Typography>{hotelId}</Typography>
    </StyledContainer>
  );
};

export default HotelDetails;
