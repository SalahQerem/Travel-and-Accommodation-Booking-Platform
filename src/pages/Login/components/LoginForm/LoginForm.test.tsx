import Providers from "@/Providers";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import { LoginPayload } from "../../API/types";
import { mockedSuccessUser, mockedUnSuccessUser } from "../../constants";
import LoginForm from "./LoginForm";

const getters = {
  getUsernameInput: () => screen.getByPlaceholderText(/^Your username/),
  getPasswordInput: () => screen.getByPlaceholderText(/^Your password/),
  getLoginButton: () => screen.getByRole("button", { name: /Login/ }),
};

export const loginUser = async (mockedUser: LoginPayload) => {
  const userNameInput = getters.getUsernameInput();
  const passwordInput = getters.getPasswordInput();
  const loginButton = getters.getLoginButton();

  await act(async () => {
    await userEvent.type(userNameInput, mockedUser.userName);
    await userEvent.type(passwordInput, mockedUser.password);
    expect(userNameInput).toHaveValue(mockedUser.userName);
    expect(passwordInput).toHaveValue(mockedUser.password);
    await userEvent.click(loginButton);
  });
};

describe("Login Form tests", () => {
  it("should render te login form", () => {
    render(
      <Providers>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </Providers>
    );
    const usernameInput = getters.getUsernameInput();
    expect(usernameInput).toBeInTheDocument();
    const passwordInput = getters.getPasswordInput();
    expect(passwordInput).toBeInTheDocument();
    const submitBtn = getters.getLoginButton();
    expect(submitBtn).toBeInTheDocument();
  });

  it("should display a error message for required fields", async () => {
    render(
      <Providers>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </Providers>
    );
    const usernameInput = getters.getUsernameInput();
    const passwordInput = getters.getPasswordInput();
    userEvent.click(usernameInput);
    userEvent.click(passwordInput);
    userEvent.click(document.body);
    const usernameInputValidationMsg = await screen.findByText(
      "Please enter your username"
    );
    const passwordInputValidationMsg = await screen.findByText(
      "Please enter your password"
    );
    expect(usernameInputValidationMsg).toBeInTheDocument();
    expect(passwordInputValidationMsg).toBeInTheDocument();
  });

  it("should display success message on successful login", async () => {
    render(
      <Providers>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </Providers>
    );
    await loginUser(mockedSuccessUser);
    await waitFor(() =>
      expect(screen.getByText("Welcome to Safer!")).toBeInTheDocument()
    );
  });

  it("should display error message on login failure", async () => {
    render(
      <Providers>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </Providers>
    );
    await loginUser(mockedUnSuccessUser);
    await waitFor(() =>
      expect(screen.getByText("Invalid Credentials")).toBeInTheDocument()
    );
  });
});
