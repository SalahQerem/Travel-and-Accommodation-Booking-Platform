import * as yup from "yup";

export const validationSchema = yup.object().shape({
  roomNumber: yup.string().required("Please specify the room number"),
  hotelId: yup.string().required("Please select the hotel"),
  cost: yup
    .number()
    .min(1, "Cost must be greater than 0")
    .required("Please specify the room cost"),
  hotel: yup
    .object()
    .shape({
      id: yup.string(),
      name: yup.string(),
      description: yup.string(),
      starRating: yup.number(),
      latitude: yup.number(),
      longitude: yup.number(),
    })
    .required("Please select the hotel"),
});
