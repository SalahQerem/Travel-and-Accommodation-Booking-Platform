export interface DateRangeFieldProps {
  checkInDate: string;
  checkOutDate: string;
  setCheckInDate: (newValue: string) => void;
  setCheckOutDate: (newValue: string) => void;
}
export interface Ranges {
  selection: { startDate: Date; endDate: Date };
}
