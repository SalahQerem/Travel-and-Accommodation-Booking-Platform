import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { CityProps } from "../types";
import { textSlicer } from "@/utils";
import { LoadingButton } from "@mui/lab";
import useDeleteCityAPI from "../hooks/useDeleteCityAPI";
import { FilePenLine, Trash } from "lucide-react";

const City: FC<CityProps> = ({ city, refetchCities, handleUpdateCity }) => {
  const { deleteCity, isPending } = useDeleteCityAPI(refetchCities);
  const { id, name, description } = city;

  const handleDelete = () => {
    deleteCity({ id });
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
        <LoadingButton
          variant="text"
          color="error"
          loading={isPending}
          onClick={handleDelete}
          sx={{ minWidth: 20 }}
        >
          <Trash color={isPending ? "transparent" : "#ee6b6e"} />
        </LoadingButton>
        <IconButton onClick={handleUpdate}>
          <FilePenLine color="black" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default City;
