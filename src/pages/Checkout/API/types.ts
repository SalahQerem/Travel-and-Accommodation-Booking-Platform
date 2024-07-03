export interface AddBookingAPIRequest {
  customerName: string;
  roomNumber: string;
  roomType: string;
  totalCost: number;
  paymentMethod: string;
}

export interface AddBookingAPIResponse {
  bookingStatus: string;
}
