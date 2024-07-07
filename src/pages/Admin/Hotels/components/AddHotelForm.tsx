import AutoCompleteField from "@/components/Fields/AutoCompleteField";
import TextField from "@/components/Fields/TextField";
import { defaultRequestQuery } from "@/constants";
import { City } from "@/types";
import { LoadingButton } from "@mui/lab";
import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { Plus } from "lucide-react";
import { InferType } from "yup";
import useGetCitiesAPI from "../../Cities/hooks/useGetCitiesAPI";
import { initialValues } from "../constants";
import { validationSchema } from "../formSchema";

type FormValues = InferType<typeof validationSchema>;

const AddHotelForm = () => {
  const { cities, isFetching } = useGetCitiesAPI(defaultRequestQuery);

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  const formikProps = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const { setFieldValue, values } = formikProps;

  return (
    <Stack>
      <FormikProvider value={formikProps}>
        <Form>
          <Paper variant="outlined" component="fieldset" sx={{ padding: 2 }}>
            <Typography variant="caption" component="legend" sx={{ m: 0 }}>
              Hotel Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <TextField name="name" placeholder="Hotel name" />
              </Grid>
              <Grid item xs={12} sm={4}>
                <AutoCompleteField
                  name="city"
                  placeholder="City"
                  options={cities ?? []}
                  getOptionLabel={(option) => (option as City).name || ""}
                  loading={isFetching}
                  onChange={(_, newValue) => setFieldValue("city", newValue)}
                  sx={{ minWidth: "100%" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  name="hotelType"
                  type="number"
                  placeholder="Hotel Type"
                  value={values.hotelType === -1 ? "" : values.hotelType}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  name="latitude"
                  type="number"
                  placeholder="Latitude"
                  value={values.latitude === 200 ? "" : values.latitude}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  name="longitude"
                  type="number"
                  placeholder="Longitude"
                  value={values.longitude === 200 ? "" : values.longitude}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  name="starRating"
                  type="number"
                  placeholder="Rating"
                  value={values.starRating === 0 ? "" : values.starRating}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField name="description" placeholder="Description" />
              </Grid>
            </Grid>
          </Paper>
          <Stack direction="row" justifyContent="flex-end" gap={2} mt={2}>
            <LoadingButton
              variant="contained"
              color="primary"
              type="submit"
              endIcon={<Plus />}
            >
              Add
            </LoadingButton>
            <Button variant="contained" color="warning">
              Cancel
            </Button>
          </Stack>
        </Form>
      </FormikProvider>
    </Stack>
  );
};

export default AddHotelForm;
