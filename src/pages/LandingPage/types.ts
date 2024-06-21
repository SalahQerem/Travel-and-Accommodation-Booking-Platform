import {
  FeaturedDeal,
  RecentlyVisitedHotel,
  TrendingDestination,
} from "./API/types";

export interface DealProps {
  deal: FeaturedDeal;
}

export interface DestinationProps {
  destination: TrendingDestination;
}

export interface RecentlyVisitedHotelProps {
  hotel: RecentlyVisitedHotel;
}
