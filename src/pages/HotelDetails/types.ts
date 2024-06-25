import { Review } from "./API/types";

export interface ReviewProps {
  review: Review;
}

export interface LocationProps {
  latitude: number;
  longitude: number;
  hotelName: string;
}
