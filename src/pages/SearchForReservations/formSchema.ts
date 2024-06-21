import * as yup from "yup";

export const validationSchema = yup.object().shape({
  city: yup.string().required("Please enter your city"),
  checkInDate: yup.string().required("Please enter your Date"),
  checkOutDate: yup.string().required("Please enter your Date"),
  numberOfRooms: yup.number().required("Please enter number of Rooms"),
  adults: yup.number().required("Please enter number of Adults"),
  children: yup.number().required("Please enter number of Children"),
});
