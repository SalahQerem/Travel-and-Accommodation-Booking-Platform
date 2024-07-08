import * as yup from "yup";

export const addHotelValidationSchema = yup.object().shape({
  name: yup.string().required("Please specify the hotel name"),
  cityname: yup.string().required("Please select the City"),
  description: yup.string().required("Please add the hotel description"),
  hotelType: yup.string().required("Please enter the hotel type"),
  starRating: yup
    .number()
    .min(0, "Rating must be between 0 and 5")
    .max(5, "Rating must be between 0 and 5")
    .required("Please specify the hotel Rating"),
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
    .object()
    .shape({
      id: yup.string(),
      name: yup.string(),
      description: yup.string(),
    })
    .required("Please select the City"),
});

export const updateHotelValidationSchema = yup.object().shape({
  name: yup.string().required("Please specify the hotel name"),
  description: yup.string().required("Please add the hotel description"),
  hotelType: yup.string().required("Please enter the hotel type"),
  starRating: yup
    .number()
    .min(0, "Rating must be between 0 and 5")
    .max(5, "Rating must be between 0 and 5")
    .required("Please specify the hotel Rating"),
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
});
