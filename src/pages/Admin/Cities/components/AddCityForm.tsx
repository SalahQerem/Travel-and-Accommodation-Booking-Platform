import { InferType } from "yup";
import { validationSchema } from "../formSchema";
import { Form, FormikProvider, useFormik } from "formik";
import { initialValues } from "../constants";
import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import TextField from "@/components/Fields/TextField";
import useAddCityAPI from "../hooks/useAddCityAPI";
import { LoadingButton } from "@mui/lab";
import { Check, Plus } from "lucide-react";
import { FC } from "react";
import { AddCityFormProps } from "../types";
import useUpdateCityAPI from "../hooks/useUpdateCityAPI";

type FormValuesTypes = InferType<typeof validationSchema>;

const AddCityForm: FC<AddCityFormProps> = ({
  cityToUpdate,
  refetchCities,
  handleCloseCityFormDialog,
}) => {
  const isUpdateAction: boolean = !!cityToUpdate.id;

  const { addCity, isPending } = useAddCityAPI(
    refetchCities,
    handleCloseCityFormDialog
  );
  const { updateCity, isUpdating } = useUpdateCityAPI(
    refetchCities,
    handleCloseCityFormDialog
  );

  const onSubmit = (values: FormValuesTypes) => {
    if (isUpdateAction) updateCity({ id: cityToUpdate.id, ...values });
    else addCity({ ...values });
  };

  const formikProps = useFormik({
    initialValues: isUpdateAction ? cityToUpdate : initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Stack>
      <FormikProvider value={formikProps}>
        <Form>
          <Paper variant="outlined" component="fieldset" sx={{ padding: 2 }}>
            <Typography variant="caption" component="legend" sx={{ m: 0 }}>
              City Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField name="name" placeholder="Hotel name" />
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
              endIcon={isUpdateAction ? <Check /> : <Plus />}
              loading={isPending || isUpdating}
            >
              {isUpdateAction ? "Save" : "Add"}
            </LoadingButton>
            <Button
              variant="contained"
              color="warning"
              onClick={handleCloseCityFormDialog}
            >
              Cancel
            </Button>
          </Stack>
        </Form>
      </FormikProvider>
    </Stack>
  );
};

export default AddCityForm;
