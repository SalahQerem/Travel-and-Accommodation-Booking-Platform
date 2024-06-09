import { BaseResponse } from "@/types/axios";
import { AxiosError } from "axios";

const extractErrorMessages = (error: AxiosError<BaseResponse>) => {
  const errors = error.response?.data?.errors;
  if (errors) return Object.values(errors).flatMap((arr) => arr);

  const title = error.response?.data?.title;
  if (title) return [title];

  return ["Something went wrong!"];
};

export const extractErrorMessage = (error: AxiosError<BaseResponse>) => {
  return extractErrorMessages(error)[0];
};
