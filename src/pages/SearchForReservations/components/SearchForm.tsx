import DateRangeField from "@/components/Fields/DateRangeField";
import TextField from "@/components/Fields/TextField";
import UpDownCounter from "@/components/Fields/UpDownCounter";
import { LoadingButton } from "@mui/lab";
import {
  Autocomplete,
  Button,
  Card,
  CircularProgress,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { Filter, Search, UsersRound } from "lucide-react";
import { FC, useState } from "react";
import { SearchForReservationsRequest } from "../API/types";
import { counters, initialValues, sortOptions } from "../constants";
import { validationSchema } from "../formSchema";
import styles from "../styles.module.css";
import { SearchFormProps } from "../types";

const SearchForm: FC<SearchFormProps> = ({ setSearchQuery, isFetching }) => {
  const [isCountersBarOpen, setIsCountersBarOpen] = useState(false);
  const [isFiltersBarOpen, setIsFiltersBarOpen] = useState(false);

  const onSubmit = (values: SearchForReservationsRequest) => {
    setSearchQuery({ ...values });
  };

  const formikProps = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const {
    adults,
    checkInDate,
    checkOutDate,
    children,
    numberOfRooms,
    starRate,
    sort,
  } = formikProps.values;

  const toggleOpenCountersBar = () => {
    setIsCountersBarOpen((prev) => !prev);
  };

  const toggleOpenFiltersBar = () => {
    setIsFiltersBarOpen((prev) => !prev);
  };

  const renderCounters = counters.map(({ name, label, min }) => (
    <Stack
      direction="row"
      gap={3}
      alignItems="center"
      justifyContent="space-between"
      key={name}
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
              <Grid item xs={3}>
                <TextField
                  name="city"
                  aria-label="Enter your Destination"
                  placeholder="Where are you going?"
                />
              </Grid>
              <Grid item xs={3}>
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
              <Grid item xs={3} sx={{ position: "relative" }}>
                <Button
                  type="button"
                  onClick={toggleOpenCountersBar}
                  className={styles.countersBtn}
                  sx={{ m: "auto" }}
                >
                  <UsersRound />
                  <Typography
                    fontWeight={500}
                  >{`${adults} Adults. ${children} Children. ${numberOfRooms} Rooms`}</Typography>
                </Button>
                {isCountersBarOpen && (
                  <Card className={styles.optionsBar}>
                    <Stack gap={2}>{renderCounters}</Stack>
                  </Card>
                )}
              </Grid>
              <Grid item xs={3} sx={{ position: "relative" }}>
                <Button
                  type="button"
                  onClick={toggleOpenFiltersBar}
                  className={styles.countersBtn}
                  sx={{ m: "auto" }}
                >
                  <Filter />
                  <Typography
                    fontWeight={500}
                  >{`Sort by ${sort} .${starRate} Stars`}</Typography>
                </Button>
                {isFiltersBarOpen && (
                  <Card
                    className={styles.optionsBar}
                    sx={{ overflow: "visible" }}
                  >
                    <Stack gap={2}>
                      <Stack
                        direction="row"
                        gap={3}
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Typography variant="h5">Rating</Typography>
                        <Rating
                          name="rating"
                          value={starRate}
                          onChange={(_, newValue) => {
                            formikProps.setFieldValue("starRate", newValue);
                          }}
                        />
                      </Stack>
                      <Stack
                        direction="row"
                        gap={3}
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Typography variant="h5" width={70}>
                          Sort by
                        </Typography>
                        <Autocomplete
                          disablePortal
                          options={sortOptions}
                          defaultValue={"Rating"}
                          sx={{ width: 130 }}
                          onChange={(_, newValue) => {
                            formikProps.setFieldValue(
                              "sort",
                              newValue ? newValue : ""
                            );
                          }}
                          renderInput={(params) => (
                            <TextField name="sort" {...params} />
                          )}
                        />
                      </Stack>
                    </Stack>
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
