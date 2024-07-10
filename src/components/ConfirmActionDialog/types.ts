import { LoadingButtonProps } from "@mui/lab";

export interface DialogAction extends LoadingButtonProps {
  text: string;
}

export interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  description: string;
  actions: DialogAction[];
  handleClose: () => void;
}
