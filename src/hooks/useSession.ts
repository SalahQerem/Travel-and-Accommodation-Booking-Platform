import { getSession } from "@/lib/session";
import { useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import { useAppDispatch } from "@/store";

export const useSession = () => {
  const session = getSession();

  const [state, setState] = useState({
    isLoggedIn: false,
    isUpdatingSession: true,
  });

  //   const dispatch = useAppDispatch();

  useEffect(() => {
    if (!session) {
      setState({
        isLoggedIn: false,
        isUpdatingSession: false,
      });
      return;
    }
    try {
      //   const payload = jwtDecode<SessionData>(session);

      // Dispatch an action to set the user's session data in the redux store
      //   dispatch(updateUserSession(payload));

      setState({
        isLoggedIn: true,
        isUpdatingSession: false,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    ...state,
  };
};
