import { FC, MouseEvent, useState } from "react";
import { PasswordFieldProps } from "./types";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useField } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const PasswordField: FC<PasswordFieldProps> = ({ name, ...rest }) => {
  const [field, meta] = useField<string>(name);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const passwordFieldConfigs = {
    fullwidth: true,
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
      {...passwordFieldConfigs}
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordField;
