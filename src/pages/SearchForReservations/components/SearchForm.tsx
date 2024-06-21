import DateRangeField from "@/components/Fields/DateRangeField";
import TextField from "@/components/Fields/TextField";
import UpDownCounter from "@/components/Fields/UpDownCounter";
import { LoadingButton } from "@mui/lab";
import {
  Button,
  Card,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { Search, UsersRound } from "lucide-react";
import { FC, useState } from "react";
import { SearchForReservationsRequest } from "../API/types";
import { counters, initialValues } from "../constants";
import { validationSchema } from "../formSchema";
import styles from "../styles.module.css";
import { SearchFormProps } from "../types";

const SearchForm: FC<SearchFormProps> = ({ setSearchQuery, isFetching }) => {
  const [isCountersBarOpen, setIsCountersBarOpen] = useState(false);
  const onSubmit = (values: SearchForReservationsRequest) => {
    setSearchQuery({ ...values });
  };

  const formikProps = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const { adults, checkInDate, checkOutDate, children, numberOfRooms } =
    formikProps.values;

  const toggleOpenCountersBar = () => {
    setIsCountersBarOpen((prev) => !prev);
  };

  const renderCounters = counters.map(({ name, label, min }) => (
    <Stack
      direction="row"
      gap={3}
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography variant="h5">{label}</Typography>
      <UpDownCounter
        value={formikProps.values[name]}
        onChange={(newValue: number) =>
          formikProps.setFieldValue(name, newValue)
        }
        min={min || 0}
      />
    </Stack>
  ));

  return (
    <Card sx={{ p: 3, maxWidth: "100%", overflow: "visible" }}>
      <FormikProvider value={formikProps}>
        <Form>
          <Stack direction="row" gap={2}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={4}>
                <TextField
                  name="city"
                  aria-label="Enter your Destination"
                  placeholder="Where are you going?"
                />
              </Grid>
              <Grid item xs={4}>
                <DateRangeField
                  checkInDate={checkInDate}
                  checkOutDate={checkOutDate}
                  setCheckInDate={(newValue: string) =>
                    formikProps.setFieldValue("checkInDate", newValue)
                  }
                  setCheckOutDate={(newValue: string) =>
                    formikProps.setFieldValue("checkOutDate", newValue)
                  }
                />
              </Grid>
              <Grid item xs={4} sx={{ position: "relative" }}>
                <Button
                  type="button"
                  onClick={toggleOpenCountersBar}
                  className={styles.countersBtn}
                  sx={{ m: "auto" }}
                >
                  <UsersRound />
                  <Typography
                    fontWeight={500}
                  >{`${adults} adults. ${children} children. ${numberOfRooms} rooms`}</Typography>
                </Button>
                {isCountersBarOpen && (
                  <Card className={styles.countersBar}>
                    <Stack gap={2}>{renderCounters}</Stack>
                  </Card>
                )}
              </Grid>
            </Grid>
            <LoadingButton
              type="submit"
              color="primary"
              variant="contained"
              loadingIndicator={<CircularProgress color="inherit" size={20} />}
              endIcon={<Search size={20} />}
              loading={isFetching}
            >
              Search
            </LoadingButton>
          </Stack>
        </Form>
      </FormikProvider>
    </Card>
  );
};

export default SearchForm;
