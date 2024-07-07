import { Grid, Select, Stack } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { initialValues } from "../constants";
import { validationSchema } from "../formSchema";
import { InferType } from "yup";
import TextField from "@/components/Fields/TextField";

type FormValues = InferType<typeof validationSchema>;

const AddHotelForm = () => {
  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  const formikProps = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Stack>
      <FormikProvider value={formikProps}>
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField name="name" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Select></Select>
            </Grid>
          </Grid>
        </Form>
      </FormikProvider>
    </Stack>
  );
};

export default AddHotelForm;
