import { selectUserRole } from "@/features/User";
import { useAppSelector } from "@/store";
import { ComponentType, FC } from "react";
import { Navigate } from "react-router-dom";
import pageAccessRights from "../pageAccessRights";
import { RouteConfigs } from "../types";

const routeHOC =
  <ComponentProps extends object>(configs: RouteConfigs) =>
  (Component: ComponentType<ComponentProps>) => {
    const { pageAccessName, title } = configs;
    document.title = title;

    const WrappedComponent: FC<ComponentProps> = (props) => {
      const userRole = useAppSelector(selectUserRole);

      if (!pageAccessName) return <Component {...props} />;

      const pageAccessRight = pageAccessRights.get(pageAccessName);

      if (!pageAccessRight) return <Component {...props} />;

      const hasAccess = pageAccessRight.role === userRole;

      if (!hasAccess) return <Navigate to="/access-denied" replace={true} />;

      return <Component {...props} />;
    };

    return WrappedComponent;
  };

export default routeHOC;
