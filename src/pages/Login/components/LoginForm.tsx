import saferLogo from "@/assets/images/full-logo.png";
import PasswordField from "@/components/Fields/PasswordField";
import TextField from "@/components/Fields/TextField";
import { LoadingButton } from "@mui/lab";
import { Card, CircularProgress, Stack } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { LogIn } from "lucide-react";
import { initialValues } from "../constants";
import { validationSchema } from "../formSchema";
import { LoginPayload } from "../API/types";
import useLoginAPI from "../hooks/useLoginAPI";

const LoginForm = () => {
  const { loginUser, isPending } = useLoginAPI();

  const onSubmit = (values: LoginPayload) => {
    loginUser({ ...values });
  };

  const formikProps = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Card sx={{ p: 3, m: 2, maxWidth: "100%" }}>
      <FormikProvider value={formikProps}>
        <Form>
          <Stack direction="row" justifyContent="center" mb={3} py={2}>
            <img src={saferLogo} alt="safer logo" width="60%" />
          </Stack>
          <Stack gap={2}>
            <TextField
              name="userName"
              aria-label="Enter your username "
              placeholder="Your username"
            />
            <PasswordField
              name="password"
              aria-label="Enter your password "
              placeholder="Your password"
            />
            <LoadingButton
              type="submit"
              color="primary"
              variant="contained"
              loadingIndicator={<CircularProgress color="inherit" size={20} />}
              endIcon={<LogIn size={20} />}
              loading={isPending}
            >
              Login
            </LoadingButton>
          </Stack>
        </Form>
      </FormikProvider>
    </Card>
  );
};

export default LoginForm;
