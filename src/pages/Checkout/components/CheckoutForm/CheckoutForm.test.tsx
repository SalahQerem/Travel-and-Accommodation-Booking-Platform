import Providers from "@/Providers";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const getters = {
  getFullnameInput: () => screen.getByPlaceholderText(/^Full name/),
  getEmailInput: () => screen.getByPlaceholderText(/^Email/),
  getStateInput: () => screen.getByPlaceholderText(/^State/),
  getCityInput: () => screen.getByPlaceholderText(/^City/),
  getPaymentMethodInput: () => screen.getByPlaceholderText(/^Payment Method/),
  getCardNumberInput: () => screen.getByPlaceholderText(/^Card Number/),
  getExpDateInput: () => screen.getByPlaceholderText("Expiration Date MM/YY"),
  getCVVInput: () => screen.getByPlaceholderText(/^CVV/),
  getNotesInput: () => screen.getByPlaceholderText(/^Notes/),
  getCheckoutButton: () =>
    screen.getByRole("button", { name: /Add new bookings to confirm it/ }),
};

describe("Checkout Form tests", () => {
  it("should render te Checkout form", () => {
    render(
      <Providers>
        <BrowserRouter>
          <CheckoutForm />
        </BrowserRouter>
      </Providers>
    );
    expect(getters.getFullnameInput()).toBeInTheDocument();
    expect(getters.getEmailInput()).toBeInTheDocument();
    expect(getters.getStateInput()).toBeInTheDocument();
    expect(getters.getCityInput()).toBeInTheDocument();
    expect(getters.getPaymentMethodInput()).toBeInTheDocument();
    expect(getters.getCardNumberInput()).toBeInTheDocument();
    expect(getters.getExpDateInput()).toBeInTheDocument();
    expect(getters.getCVVInput()).toBeInTheDocument();
    expect(getters.getNotesInput()).toBeInTheDocument();
    expect(getters.getCheckoutButton()).toBeInTheDocument();
  });

  it("should display a error message for required fields", async () => {
    render(
      <Providers>
        <BrowserRouter>
          <CheckoutForm />
        </BrowserRouter>
      </Providers>
    );
    userEvent.click(getters.getFullnameInput());
    userEvent.click(getters.getEmailInput());
    userEvent.click(getters.getStateInput());
    userEvent.click(getters.getCityInput());
    userEvent.click(getters.getPaymentMethodInput());
    userEvent.click(document.body);
    const fullnameInputValidationMsg = await screen.findByText(
      "Please enter your full name"
    );
    const emailInputValidationMsg = await screen.findByText(
      "Please enter your email"
    );
    const stateInputValidationMsg = await screen.findByText(
      "Please enter your state"
    );
    const cityInputValidationMsg = await screen.findByText(
      "Please enter your city"
    );
    const paymentMethodInputValidationMsg = await screen.findByText(
      "Please select your payment method"
    );

    expect(fullnameInputValidationMsg).toBeInTheDocument();
    expect(emailInputValidationMsg).toBeInTheDocument();
    expect(stateInputValidationMsg).toBeInTheDocument();
    expect(cityInputValidationMsg).toBeInTheDocument();
    expect(paymentMethodInputValidationMsg).toBeInTheDocument();
  });
});
