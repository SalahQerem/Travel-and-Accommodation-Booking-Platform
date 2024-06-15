import { FeaturedDeal, PremiumChoice, TrendingDestination } from "./API/types";

export interface DealProps {
  deal: FeaturedDeal;
}

export interface DestinationProps {
  destination: TrendingDestination;
}

export interface PremiumChoicesProps {
  chioce: PremiumChoice;
}
