import { login } from "@/features/User";
import { useSnackBar } from "@/hooks/useSnackbar";
import { SessionData, setSession } from "@/lib/session";
import { useAppDispatch } from "@/store";
import { useMutation } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../API";
import { axiosInstance } from "@/config/axios.config";

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
      dispatch(login(payload));

      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${authentication}`;

      if (payload.userType == "Admin") navigate("/me/hotels");
      else navigate("/me");
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
