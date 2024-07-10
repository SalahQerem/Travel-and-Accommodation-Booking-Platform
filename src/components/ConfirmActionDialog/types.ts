import { LoadingButtonProps } from "@mui/lab";

export interface DialogAction extends LoadingButtonProps {
  text: string;
}

export interface ConfirmDialogProps {
  isOpen: boolean;
  handleClose: () => void;
  title: string;
  description: string;
  actions: DialogAction[];
}
