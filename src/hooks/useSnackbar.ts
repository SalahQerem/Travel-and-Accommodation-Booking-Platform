import {
  hideSnackbar,
  showErrorSnackbar,
  showSnackbar,
  showSuccessSnackbar,
  showWarningSnackbar,
} from "@/features/Snackbar";
import { ShowSnackbarPayload } from "@/features/Snackbar/types";
import { useDispatch } from "react-redux";

interface SnackbarOptions extends Omit<ShowSnackbarPayload, "variant"> {}

export const useSnackBar = () => {
  const dispatch = useDispatch();

  return {
    showSnackBar: (options: SnackbarOptions) => dispatch(showSnackbar(options)),
    showErrorSnackbar: (options: SnackbarOptions) =>
      dispatch(showErrorSnackbar(options)),
    showWarningSnackbar: (options: SnackbarOptions) =>
      dispatch(showWarningSnackbar(options)),
    showSuccessSnackbar: (options: SnackbarOptions) =>
      dispatch(showSuccessSnackbar(options)),
    hideSnackBar: () => dispatch(hideSnackbar()),
  };
};
