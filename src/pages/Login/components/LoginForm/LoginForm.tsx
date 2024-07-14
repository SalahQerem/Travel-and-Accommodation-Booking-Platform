import PasswordField from "@/components/Fields/PasswordField";
import TextField from "@/components/Fields/TextField";
import { LoadingButton } from "@mui/lab";
import { CircularProgress, Stack } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { LogIn } from "lucide-react";
import { LoginPayload } from "../../API/types";
import { initialValues } from "../../constants";
import { validationSchema } from "../../formSchema";
import useLoginAPI from "../../hooks/useLoginAPI";

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
    <FormikProvider value={formikProps}>
      <Form>
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
  );
};

export default LoginForm;
