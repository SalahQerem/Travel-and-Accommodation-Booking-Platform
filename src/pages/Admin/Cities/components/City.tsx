import { textSlicer } from "@/utils";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { FilePenLine, Trash } from "lucide-react";
import { FC } from "react";
import { CityProps } from "../types";

const City: FC<CityProps> = ({
  city,
  handleUpdateCity,
  handleOpenConfirmDeleteDialog,
}) => {
  const { name, description } = city;

  const handleDelete = () => {
    handleOpenConfirmDeleteDialog(city);
  };

  const handleUpdate = () => {
    handleUpdateCity(city);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" mb={2}>
          {name}
        </Typography>
        <Typography>{textSlicer(description)}</Typography>
      </CardContent>
      <CardActions>
        <Stack direction="row" gap={2} justifyContent="flex-end" width="100%">
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={handleDelete}
            endIcon={<Trash size={20} />}
          >
            Delete
          </Button>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={handleUpdate}
            endIcon={<FilePenLine size={20} />}
          >
            Edit
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default City;
