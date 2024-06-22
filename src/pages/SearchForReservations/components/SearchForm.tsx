import DateRangeField from "@/components/Fields/DateRangeField";
import TextField from "@/components/Fields/TextField";
import UpDownCounter from "@/components/Fields/UpDownCounter";
import useMediaQuery from "@/hooks/useMediaQuery";
import { getUrlQueryObj, getUrlQueryString } from "@/utils/urlQueryParams";
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
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchForReservationsRequest } from "../API/types";
import { counters, initialValues, sortOptions } from "../constants";
import { validationSchema } from "../formSchema";
import styles from "../styles.module.css";
import { SearchFormProps } from "../types";

const SearchForm: FC<SearchFormProps> = ({ setSearchQuery, isFetching }) => {
  const queryObj = getUrlQueryObj(new URL(location.href));

  const [isCountersBarOpen, setIsCountersBarOpen] = useState(false);
  const [isFiltersBarOpen, setIsFiltersBarOpen] = useState(false);

  const { isTabletOrLess } = useMediaQuery();
  const navigate = useNavigate();

  const onSubmit = (values: SearchForReservationsRequest) => {
    if (setSearchQuery) setSearchQuery({ ...values });
    else {
      const urlPath = getUrlQueryString("/search", formikProps.values);
      navigate(urlPath);
    }
  };

  const formikProps = useFormik({
    initialValues: Object.keys(queryObj).length > 0 ? queryObj : initialValues,
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
        value={formikProps.values[name]!}
        onChange={(newValue: number) =>
          formikProps.setFieldValue(name, newValue)
        }
        min={min || 0}
      />
    </Stack>
  ));

  useEffect(() => {
    if (Object.keys(queryObj).length > 0 && setSearchQuery) {
      setSearchQuery({ ...queryObj });
    }
  }, []);

  return (
    <Card sx={{ p: 3, maxWidth: "100%", overflow: "visible" }}>
      <FormikProvider value={formikProps}>
        <Form>
          <Stack
            direction={isTabletOrLess ? "column" : "row"}
            alignItems="center"
            gap={2}
          >
            <Grid
              container
              spacing={1}
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item xs={12} md={6} lg={2.6}>
                <TextField
                  name="city"
                  aria-label="Enter your Destination"
                  placeholder="Where are you going?"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={3.2}>
                <DateRangeField
                  checkInDate={checkInDate!}
                  checkOutDate={checkOutDate!}
                  setCheckInDate={(newValue: string) =>
                    formikProps.setFieldValue("checkInDate", newValue)
                  }
                  setCheckOutDate={(newValue: string) =>
                    formikProps.setFieldValue("checkOutDate", newValue)
                  }
                />
              </Grid>
              <Grid item xs={12} md={6} lg={3.3} sx={{ position: "relative" }}>
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
              <Grid item xs={12} md={6} lg={2.7} sx={{ position: "relative" }}>
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
                          sx={{ width: 130 }}
                          value={sort}
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
