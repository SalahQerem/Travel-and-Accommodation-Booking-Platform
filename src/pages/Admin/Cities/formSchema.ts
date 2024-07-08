import * as yup from "yup";

export const addCityValidationSchema = yup.object().shape({
  name: yup.string().required("Please specify the city name"),
  description: yup.string().required("Please add the city description"),
});
