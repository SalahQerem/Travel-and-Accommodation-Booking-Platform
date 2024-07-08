import TextField from "@/components/Fields/TextField";
import { LoadingButton } from "@mui/lab";
import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { Check } from "lucide-react";
import { FC } from "react";
import { InferType } from "yup";
import { updateHotelValidationSchema } from "../formSchema";
import { UpdateHotelFormProps } from "../types";
import useUpdateHotelAPI from "../hooks/useUpdateHotelAPI";

type FormValuesTypes = InferType<typeof updateHotelValidationSchema>;

const UpdateHotelForm: FC<UpdateHotelFormProps> = ({
  hotelToUpdate,
  handleCloseUpdateHotelDialog,
  refetchHotels,
}) => {
  const { updateHotel, isPending } = useUpdateHotelAPI(
    refetchHotels,
    handleCloseUpdateHotelDialog
  );

  const onSubmit = (values: FormValuesTypes) => {
    updateHotel({ ...values, id: hotelToUpdate.id });
  };

  const formikProps = useFormik({
    initialValues: hotelToUpdate,
    onSubmit,
    validationSchema: updateHotelValidationSchema,
  });

  return (
    <Stack>
      <FormikProvider value={formikProps}>
        <Form>
          <Paper variant="outlined" component="fieldset" sx={{ padding: 2 }}>
            <Typography variant="caption" component="legend" sx={{ m: 0 }}>
              Hotel Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={7}>
                <TextField
                  name="name"
                  placeholder="Hotel name"
                  label="Hotel name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  name="hotelType"
                  type="string"
                  placeholder="Hotel type"
                  label="Hotel type"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  name="latitude"
                  type="number"
                  placeholder="Latitude"
                  label="Latitude"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  name="longitude"
                  type="number"
                  placeholder="Longitude"
                  label="Longitude"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  name="starRating"
                  type="number"
                  placeholder="Rating"
                  label="Rating"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="description"
                  placeholder="Description"
                  label="Description"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Paper>
          <Stack direction="row" justifyContent="flex-end" gap={2} mt={2}>
            <LoadingButton
              variant="contained"
              color="primary"
              type="submit"
              endIcon={<Check />}
              loading={isPending}
            >
              Save
            </LoadingButton>
            <Button
              variant="contained"
              color="warning"
              onClick={handleCloseUpdateHotelDialog}
            >
              Cancel
            </Button>
          </Stack>
        </Form>
      </FormikProvider>
    </Stack>
  );
};

export default UpdateHotelForm;
