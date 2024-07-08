import AutoCompleteField from "@/components/Fields/AutoCompleteField";
import TextField from "@/components/Fields/TextField";
import { defaultRequestQuery } from "@/constants";
import { City } from "@/types";
import { LoadingButton } from "@mui/lab";
import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { Plus } from "lucide-react";
import { FC } from "react";
import { InferType } from "yup";
import useGetCitiesAPI from "../../Cities/hooks/useGetCitiesAPI";
import { initialValues } from "../constants";
import { validationSchema } from "../formSchema";
import useAddHotelAPI from "../hooks/useAddHotelAPI";
import { AddHotelFormProps } from "../types";

export type FormValuesTypes = InferType<typeof validationSchema>;

const AddHotelForm: FC<AddHotelFormProps> = ({
  refetchHotels,
  handleCloseAddHotelDialog,
}) => {
  const { cities, isFetching } = useGetCitiesAPI(defaultRequestQuery);
  const { addHotel, isPending } = useAddHotelAPI(
    refetchHotels,
    handleCloseAddHotelDialog
  );

  const onSubmit = (values: FormValuesTypes) => {
    addHotel({ ...values, cityId: values.city.id! });
  };

  const formikProps = useFormik<FormValuesTypes>({
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
              <Grid item xs={12} sm={7}>
                <TextField name="name" placeholder="Hotel name" />
              </Grid>
              <Grid item xs={12} sm={5}>
                <AutoCompleteField
                  name="cityname"
                  placeholder="City"
                  options={cities ?? []}
                  getOptionLabel={(option) => (option as City).name || ""}
                  loading={isFetching}
                  value={values.city}
                  onChange={(_, newValue) => {
                    setFieldValue("city", newValue);
                    setFieldValue("cityname", (newValue as City)?.name ?? "");
                  }}
                  sx={{ minWidth: "100%" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  name="hotelType"
                  type="number"
                  placeholder="Hotel Type"
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
                  value={values.starRating === -1 ? "" : values.starRating}
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
              loading={isPending}
            >
              Add
            </LoadingButton>
            <Button
              variant="contained"
              color="warning"
              onClick={handleCloseAddHotelDialog}
            >
              Cancel
            </Button>
          </Stack>
        </Form>
      </FormikProvider>
    </Stack>
  );
};

export default AddHotelForm;
