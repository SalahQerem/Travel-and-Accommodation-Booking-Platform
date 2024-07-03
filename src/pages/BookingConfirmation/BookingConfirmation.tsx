import StyledContainer from "@/containers/StyledContainer";
import { formatCamelCaseText } from "@/utils";
import { getUrlQueryObj } from "@/utils/urlQueryParams";
import {
  Button,
  Card,
  CardActions,
  Container,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

const BookingConfirmation = () => {
  const queryObj = getUrlQueryObj(new URL(location.href));

  const renderConfirmationDetails = Object.keys(queryObj).map((info) => (
    <ListItem key={info}>
      <Typography width="50%" textAlign="center">
        {formatCamelCaseText(info)}
      </Typography>
      <Typography width="50%" textAlign="center">
        {info == "bookingDateTime"
          ? dayjs(queryObj[info]).format("YYYY-MM-DD MM:HH")
          : queryObj[info]}
      </Typography>
    </ListItem>
  ));

  return (
    <StyledContainer>
      <Container
        sx={{
          py: 14,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card sx={{ padding: 3, minWidth: 600 }}>
          <Typography variant="h4" component="h1" textAlign="center" mb={3}>
            Confirmation Details
          </Typography>
          <List>{renderConfirmationDetails}</List>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              color="primary"
              component={Link}
              to={`/`}
              sx={{ m: "auto" }}
            >
              Return to Home
            </Button>
          </CardActions>
        </Card>
      </Container>
    </StyledContainer>
  );
};

export default BookingConfirmation;
