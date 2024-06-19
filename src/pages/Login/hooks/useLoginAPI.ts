import { useMutation } from "@tanstack/react-query";
import { loginAPI } from "../API";
import { useSnackBar } from "@/hooks/useSnackbar";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { SessionData, setSession } from "@/lib/session";
import { useAppDispatch } from "@/store";
import { updateUserSession } from "@/features/User";

const useLoginAPI = () => {
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { mutate: loginUser, isPending } = useMutation({
    mutationFn: loginAPI,
    onSuccess: ({ authentication }) => {
      setTimeout(
        () => showSuccessSnackbar({ message: "Welcome to Safer!" }),
        1000
      );

      setSession(authentication);
      const payload = jwtDecode<SessionData>(authentication);
      dispatch(updateUserSession(payload));

      navigate("/me");
    },
    onError: () => {
      showErrorSnackbar({ message: "Invalid Credentials" });
    },
  });

  return {
    loginUser,
    isPending,
  };
};

export default useLoginAPI;
