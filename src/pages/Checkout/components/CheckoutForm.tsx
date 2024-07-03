import TextField from "@/components/Fields/TextField";
import { Card, Stack, Typography } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { FC } from "react";
import { initialValues, paymentMethods } from "../constants";
import { validationSchema } from "../formSchema";
import AutoCompleteField from "@/components/Fields/AutoCompleteField";
import { PaymentMethod } from "../types";
import { LoadingButton } from "@mui/lab";

const CheckoutForm: FC = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formikProps = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const { setFieldValue } = formikProps;

  return (
    <Card>
      <FormikProvider value={formikProps}>
        <Form>
          <Stack gap={2} p={2}>
            <Typography variant="h5" component="h2" textAlign="center">
              Payment Information
            </Typography>
            <TextField name="customerName" placeholder="Full name" />
            <TextField name="email" placeholder="Email" />
            <TextField name="state" placeholder="State" />
            <TextField name="city" placeholder="City" />
            <AutoCompleteField
              name="paymentMethod"
              placeholder="Payment Method"
              disablePortal
              id="roles-autocomplete"
              defaultValue={null}
              options={paymentMethods}
              getOptionLabel={(option) => (option as PaymentMethod).name}
              onChange={(_, value) => {
                setFieldValue("paymentMethod", value);
              }}
            />
            <TextField name="cardNumber" placeholder="Card Number" />
            <TextField name="expDate" placeholder="Expiration Date MM/YY" />
            <TextField name="CVV" placeholder="CVV" />
            <TextField name="notes" placeholder="Notes" />
            <LoadingButton variant="contained" type="submit">
              Book now
            </LoadingButton>
          </Stack>
        </Form>
      </FormikProvider>
    </Card>
  );
};

export default CheckoutForm;
