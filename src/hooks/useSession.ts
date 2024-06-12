import { SessionData, getSession } from "@/lib/session";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useAppDispatch } from "@/store";
import { updateUserSession } from "@/features/User";
import { useSnackBar } from "./useSnackbar";

const useSession = () => {
  const session = getSession();

  const [state, setState] = useState({
    isLoggedIn: false,
    isUpdatingSession: true,
  });

  const dispatch = useAppDispatch();
  const { showErrorSnackbar } = useSnackBar();

  useEffect(() => {
    if (!session) {
      setState({
        isLoggedIn: false,
        isUpdatingSession: false,
      });
      return;
    }
    try {
      const payload = jwtDecode<SessionData>(session);
      dispatch(updateUserSession(payload));

      setState({
        isLoggedIn: true,
        isUpdatingSession: false,
      });
    } catch (error: Error | unknown) {
      if (error instanceof Error)
        showErrorSnackbar({
          message: `${error.name}: ${error.message}`,
        });
    }
  }, []);

  return {
    ...state,
  };
};

export default useSession;
