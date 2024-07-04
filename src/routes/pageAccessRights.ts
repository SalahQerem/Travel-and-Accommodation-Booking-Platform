import { PageAccessName, PageAccessRight } from "./types";

const pagesAccessRights = new Map<PageAccessName, PageAccessRight>([
  [
    "Home",
    {
      role: "User",
    },
  ],
]);

export default pagesAccessRights;
