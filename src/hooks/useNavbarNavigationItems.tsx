import { selectIsAdmin, selectIsUser } from "@/features/User";
import { useAppSelector } from "@/store";
import { NavigationItem } from "@/types";

const useNavbarNavigationItems = () => {
  const isUser = useAppSelector(selectIsUser);
  const isAdmin = useAppSelector(selectIsAdmin);

  const navigationItems: Array<NavigationItem> = [
    {
      id: "features deals",
      label: "Featured Deals",
      isVisible: isUser,
    },
    {
      id: "trending destinations",
      label: "Trending Destinations",
      isVisible: isUser,
    },
    {
      id: "recently visited hotels",
      label: "Recently visited Hotels",
      isVisible: isUser,
    },
    {
      id: "hotels",
      label: "Manage Hotels",
      to: "/me/hotels",
      isVisible: isAdmin,
    },
    {
      id: "cities",
      label: "Manage Cities",
      to: "/me/cities",
      isVisible: isAdmin,
    },
    {
      id: "rooms",
      label: "Manage Rooms",
      to: "/me/rooms",
      isVisible: isAdmin,
    },
  ];

  return { navigationItems: navigationItems.filter((item) => item.isVisible) };
};

export default useNavbarNavigationItems;
