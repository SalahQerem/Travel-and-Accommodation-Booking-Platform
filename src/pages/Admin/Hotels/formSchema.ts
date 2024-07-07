import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup.string().required("Please specify the Hotel name"),
  description: yup.string().required("Please add the Hotel description"),
  hotelType: yup.number().required("Please enter the Hotel type"),
  starRating: yup.number().required("Please specify the Hotel description"),
  latitude: yup
    .number()
    .min(-90, "Latitude must be between -90 and 90")
    .max(90, "Latitude must be between -90 and 90")
    .required("Latitude is required"),
  longitude: yup
    .number()
    .min(-180, "Longitude must be between -180 and 180")
    .max(180, "Longitude must be between -180 and 180")
    .required("Longitude is required"),
  city: yup
    .object({
      id: yup.string(),
      name: yup.string(),
      description: yup.string(),
    })
    .required("Please select the City"),
});
