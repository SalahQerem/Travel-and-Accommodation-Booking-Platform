import { Room } from "@/types";

export interface GalaryItem {
  id: string;
  url: string;
}

export interface GetHotelGalaryResponse extends Array<GalaryItem> {}

export interface Review {
  reviewId: number;
  customerName: string;
  rating: number;
  description: string;
}

export interface GetHotelReviewsResponse extends Array<Review> {}

export interface GetHotelRoomsResponse extends Array<Room> {}
