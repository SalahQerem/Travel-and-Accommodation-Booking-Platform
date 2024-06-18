import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useField } from "formik";
import { Eye, EyeOff } from "lucide-react";
import { FC, MouseEvent, useState } from "react";
import { PasswordFieldProps } from "./types";

const PasswordField: FC<PasswordFieldProps> = ({ name, ...rest }) => {
  const [field, meta] = useField<string>(name);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const passwordFieldConfigs = {
    ...field,
    ...rest,
  };

  if (meta && meta.touched && meta.error) {
    passwordFieldConfigs.error = true;
    passwordFieldConfigs.helperText = meta.error;
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <TextField
      size="small"
      variant="outlined"
      type={showPassword ? "text" : "password"}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...passwordFieldConfigs}
    />
  );
};

export default PasswordField;
