import { LoginPayload } from "./API/types";

export const initialValues: LoginPayload = {
  userName: "",
  password: "",
};

export const mockedSuccessUser: LoginPayload = {
  userName: "user",
  password: "user",
};

export const mockedUnSuccessUser: LoginPayload = {
  userName: "salahqerem",
  password: "12345678",
};
