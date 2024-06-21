import { useSnackBar } from "@/hooks/useSnackbar";
import { Box, Button, Card, Typography } from "@mui/material";
import { CalendarDays } from "lucide-react";
import { FC, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import styles from "./styles.module.css";
import { DateRangeFieldProps, Ranges } from "./types";
import dayjs from "dayjs";

const DateRangeField: FC<DateRangeFieldProps> = ({
  checkInDate,
  checkOutDate,
  setCheckInDate,
  setCheckOutDate,
}) => {
  const { showErrorSnackbar } = useSnackBar();
  const handleSelect = ({ selection }: Ranges) => {
    const current = dayjs(new Date()).format("YYYY-MM-DD");
    const checkIn = dayjs(selection.startDate).format("YYYY-MM-DD");
    const checkout = dayjs(selection.endDate).format("YYYY-MM-DD");
    if (checkIn > current) {
      setCheckInDate(selection.startDate.toLocaleDateString("en-CA"));
    } else if (checkout > current) {
      setCheckOutDate(selection.endDate.toLocaleDateString("en-CA"));
    } else {
      showErrorSnackbar({
        message: "Check-in date or check-out date cannot be in the past!",
        autoHideDuration: 3000,
      });
    }
  };

  const [isDateRangeBarOpen, setIsDateRangeBarOpen] = useState(false);

  const toggleDateSelection = () => {
    setIsDateRangeBarOpen((prev) => !prev);
  };

  const selectionRange = {
    startDate: new Date(checkInDate),
    endDate: new Date(checkOutDate),
    key: "selection",
  };

  return (
    <Box sx={{ position: "relative", width: "fit-content", m: "auto" }}>
      <Button
        type="button"
        className={styles.dateBtn}
        onClick={toggleDateSelection}
      >
        <CalendarDays />
        <Typography
          fontWeight={500}
        >{`${checkInDate} - ${checkOutDate}`}</Typography>
      </Button>
      {isDateRangeBarOpen && (
        <Card className={styles.dateRange}>
          <DateRange
            ranges={[selectionRange]}
            onChange={handleSelect}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
          />
        </Card>
      )}
    </Box>
  );
};

export default DateRangeField;
