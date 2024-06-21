import { Box, Button, Typography } from "@mui/material";
import { CalendarDays } from "lucide-react";
import { FC, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangeFieldProps, Ranges } from "./types";
import styles from "./styles.module.css";

const DateRangeField: FC<DateRangeFieldProps> = ({
  checkInDate,
  checkOutDate,
  setCheckInDate,
  setCheckOutDate,
}) => {
  const handleSelect = ({ selection }: Ranges) => {
    setCheckInDate(selection.startDate.toLocaleDateString("en-CA"));
    setCheckOutDate(selection.endDate.toLocaleDateString("en-CA"));
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
    <Box sx={{ position: "relative" }}>
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
        <DateRange
          ranges={[selectionRange]}
          onChange={handleSelect}
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          className={styles.dateRange}
        />
      )}
    </Box>
  );
};

export default DateRangeField;
