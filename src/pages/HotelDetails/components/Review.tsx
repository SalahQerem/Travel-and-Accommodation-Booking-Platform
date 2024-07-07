import { Card, Rating, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { ReviewProps } from "../types";

const Review: FC<ReviewProps> = ({ review }) => {
  const { customerName, description, rating } = review;
  return (
    <Card sx={{ p: 2 }}>
      <Stack gap={2}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6">{customerName}</Typography>
          <Rating value={rating} readOnly />
        </Stack>
        <Typography variant="body1">{description}</Typography>
      </Stack>
    </Card>
  );
};

export default Review;
