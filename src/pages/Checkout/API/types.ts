export interface AddBookingAPIRequest {
  customerName: string;
  roomNumber: string;
  roomType: string;
  totalCost: number;
  paymentMethod: string;
}

export interface AddBookingAPIResponse {
  customerName: string;
  hotelName: string;
  roomNumber: string;
  roomType: string;
  bookingDateTime: string;
  totalCost: number;
  paymentMethod: string;
  bookingStatus: string;
  confirmationNumber: string;
}
