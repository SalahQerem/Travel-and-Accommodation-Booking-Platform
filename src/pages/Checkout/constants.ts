import { PaymentMethod } from "./types";

export const initialValues = {
  customerName: "",
  email: "",
  state: "",
  city: "",
  paymentMethod: {
    name: "",
    value: "",
  },
  cardNumber: "",
  expDate: "",
  CVV: "",
  notes: "",
  payment: "",
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
