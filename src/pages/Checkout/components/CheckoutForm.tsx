import AutoCompleteField from "@/components/Fields/AutoCompleteField";
import TextField from "@/components/Fields/TextField";
import { LoadingButton } from "@mui/lab";
import { Card, Stack, Typography } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { FC } from "react";
import { InferType } from "yup";
import { initialValues, paymentMethods } from "../constants";
import { validationSchema } from "../formSchema";
import { PaymentMethod } from "../types";
import useAddBookingAPI from "../hooks/useAddBookingAPI";
import { useAppSelector } from "@/store";
import { selectCartItems } from "@/features/Cart";

type FormValues = InferType<typeof validationSchema>;

const CheckoutForm: FC = () => {
  const cart = useAppSelector(selectCartItems);
  const { addBooking, isPending } = useAddBookingAPI();
  const onSubmit = (values: FormValues) => {
    addBooking({
      roomNumber: cart[0].roomNumber,
      roomType: cart[0].roomType,
      totalCost: cart[0].price,
      customerName: values.customerName,
      paymentMethod: values.paymentMethod.value,
    });
  };

  const formikProps = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const { setFieldValue, values } = formikProps;

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
              id="paymentMethod-autocomplete"
              defaultValue={null}
              options={paymentMethods}
              getOptionLabel={(option) => (option as PaymentMethod).name}
              onChange={(_, value) => {
                setFieldValue("paymentMethod", value);
              }}
            />
            <TextField
              name="cardNumber"
              placeholder="Card Number"
              disabled={values.paymentMethod.value === "Cash"}
            />
            <TextField
              name="expDate"
              placeholder="Expiration Date MM/YY"
              disabled={values.paymentMethod?.value === "Cash"}
            />
            <TextField
              name="CVV"
              placeholder="CVV"
              disabled={values.paymentMethod.value === "Cash"}
            />
            <TextField name="notes" placeholder="Notes" />
            <LoadingButton
              variant="contained"
              type="submit"
              loading={isPending}
            >
              Book now
            </LoadingButton>
          </Stack>
        </Form>
      </FormikProvider>
    </Card>
  );
};

export default CheckoutForm;