import * as yup from "yup";

export const validationSchema = yup.object().shape({
  customerName: yup.string().required("Please enter your full name"),
  email: yup.string().email().required("Please enter your email"),
  state: yup.string().required("Please enter your state"),
  city: yup.string().required("Please enter your city"),
  paymentMethod: yup.object().required("Please select your payment method"),
  cardNumber: yup.number().required("Please enter your card number"),
  expDate: yup.string().required("Please enter the card expiration date"),
  CVV: yup.string().required("Please enter the card CVV"),
  notes: yup.string(),
});
