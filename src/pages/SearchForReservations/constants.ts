export const initialValues = {
  checkInDate: (() => {
    const nextDate = new Date();
    nextDate.setDate(new Date().getDate() + 1);
    return nextDate.toLocaleDateString("en-CA");
  })(),
  checkOutDate: (() => {
    const nextDate = new Date();
    nextDate.setDate(new Date().getDate() + 2);
    return nextDate.toLocaleDateString("en-CA");
  })(),
  city: "",
  numberOfRooms: 1,
  adults: 2,
  children: 0,
  sort: "",
  starRate: 0,
};
