import { PaymentMethod } from "./types";

export const initialValues = {
  customerName: "",
  email: "",
  state: "",
  city: "",
  paymentMethod: null,
  cardNumber: "",
  expDate: "",
  CVV: "",
  notes: "",
};

export const paymentMethods: Array<PaymentMethod> = [
  {
    name: "Visa",
    value: "Visa",
  },
  {
    name: "Master Card",
    value: "Master Card",
  },
  {
    name: "Cash",
    value: "Cash",
  },
];
