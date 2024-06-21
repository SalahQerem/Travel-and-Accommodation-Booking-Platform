import DateRangeField from "@/components/Fields/DateRangeField";
import TextField from "@/components/Fields/TextField";
import { LoadingButton } from "@mui/lab";
import { Card, CircularProgress, Grid } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { SearchForReservationsRequest } from "../API/types";
import { initialValues } from "../constants";
import { validationSchema } from "../formSchema";

const SearchForm = () => {
  const onSubmit = (values: SearchForReservationsRequest) => {
    console.log(values);
  };

  const formikProps = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Card sx={{ p: 3, m: 2, maxWidth: "100%", overflow: "visible" }}>
      <FormikProvider value={formikProps}>
        <Form>
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
                checkInDate={formikProps.values.checkInDate}
                checkOutDate={formikProps.values.checkOutDate}
                setCheckInDate={(newValue: string) =>
                  formikProps.setFieldValue("checkInDate", newValue)
                }
                setCheckOutDate={(newValue: string) =>
                  formikProps.setFieldValue("checkOutDate", newValue)
                }
              />
            </Grid>

            <Grid item xs={3}>
              <LoadingButton
                type="submit"
                color="primary"
                variant="contained"
                loadingIndicator={
                  <CircularProgress color="inherit" size={20} />
                }
                //   endIcon={<LogIn size={20} />}
                //   loading={isPending}
              >
                Search
              </LoadingButton>
            </Grid>
          </Grid>
        </Form>
      </FormikProvider>
    </Card>
  );
};

export default SearchForm;
