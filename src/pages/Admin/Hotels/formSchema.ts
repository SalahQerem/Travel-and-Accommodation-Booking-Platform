import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup.string().required("Please specify the Hotel name"),
  description: yup.string().required("Please add the Hotel description"),
  hotelType: yup.number().required("Please enter the Hotel type"),
  starRating: yup.number().required("Please specify the Hotel description"),
  latitude: yup.number().required("Please enter the Hotel latitude"),
  longitude: yup.number().required("Please enter the Hotel longitude"),
});
