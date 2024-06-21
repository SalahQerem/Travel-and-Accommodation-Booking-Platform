import * as yup from "yup";

export const validationSchema = yup.object().shape({
  city: yup.string(),
  checkInDate: yup.string(),
  checkOutDate: yup.string(),
  numberOfRooms: yup.number(),
  adults: yup.number(),
  children: yup.number(),
  starRating: yup.number(),
  sort: yup.string(),
});
