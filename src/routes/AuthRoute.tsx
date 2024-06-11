// import useSession from "@/hooks/useSession";
import { FC, PropsWithChildren } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
// import BlockUI from "../containers/BlockUI";

const AuthRoute: FC<PropsWithChildren> = () => {
  const location = useLocation();

  //   const { isUpdatingSession, isLoggedIn } = useSession();

  //   if (isUpdatingSession) return <BlockUI />;

  //   if (!isLoggedIn)
  return (
    <Navigate
      to="/unauthenticated"
      replace
      state={{ from: location.pathname }}
    />
  );

  return <Outlet />;
};

export default AuthRoute;
