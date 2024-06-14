import { AxiosBaseError } from "@/types/axios";

/**
 * Extracts error messages from an Axios error response.
 * @param {AxiosBaseError} error - The Axios error object.
 * @returns {string[]} An array of error messages.
 */
const extractErrorMessages = (error: AxiosBaseError) => {
  const errors = error.response?.data?.errors;
  // Try to extract `errors` key from response (Backend returns this key only if the errors are validation errors)
  if (errors) return Object.values(errors).flatMap((arr) => arr);

  // If the response does not have `errors` key, try to extract `title` key from response. This will usually work for non-validation errors
  const title = error.response?.data?.title;
  if (title) return [title];

  // If the response does not have `title` key, return a generic error message
  return ["Something went wrong!"];
};

/**
 * Extracts the first error message from an Axios error response.
 * @param {AxiosBaseError} error - The Axios error object.
 * @returns {string} The first error message.
 */
export const extractErrorMessage = (error: AxiosBaseError) => {
  return extractErrorMessages(error)[0];
};
