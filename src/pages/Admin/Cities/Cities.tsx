import ConfirmActionDialog from "@/components/ConfirmActionDialog";
import { defaultRequestQuery } from "@/constants";
import BlockUI from "@/containers/BlockUI";
import StyledContainer from "@/containers/StyledContainer";
import routeHOC from "@/routes/HOCs/routeHOC";
import useGetCitiesAPI from "@/services/useGetCitiesAPI";
import { City as CityType, RequestQuery } from "@/types";
import {
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Plus, Search } from "lucide-react";
import { ChangeEvent, useState } from "react";
import AddCityDialog from "./components/AddCityDialog";
import City from "./components/City";
import { defaultCity } from "./constants";
import useDeleteCityAPI from "./hooks/useDeleteCityAPI";

const Cities = () => {
  const [isCityFormDialogOpen, setIsCityFormDialogOpen] =
    useState<boolean>(false);
  const [cityToUpdate, setCityToUpdate] = useState<CityType>(defaultCity);
  const [nameToSearch, setNameToSearch] = useState<string>("");
  const [requestQuery, setRequestQuery] =
    useState<RequestQuery>(defaultRequestQuery);
  const [cityToDelete, setCityToDelete] = useState(defaultCity);
  const [isConfirmDeleteDialogOpen, setIsConfirmDeleteDialogOpen] =
    useState<boolean>(false);

  const handleDelete = () => {
    deleteCity({ id: cityToDelete.id });
  };

  const handleOpenCityFormDialog = () => {
    setIsCityFormDialogOpen(true);
  };
  const handleCloseCityFormDialog = () => {
    setIsCityFormDialogOpen(false);
  };

  const handleOpenConfirmDeleteDialog = (city: CityType) => {
    setIsConfirmDeleteDialogOpen(true);
    setCityToDelete(city);
  };
  const handleCloseConfirmDeleteDialog = () => {
    setIsConfirmDeleteDialogOpen(false);
  };

  const handleUpdateCity = (city: CityType) => {
    setIsCityFormDialogOpen(true);
    setCityToUpdate(city);
  };

  const handleSearchForCity = () => {
    setRequestQuery({ ...requestQuery, name: nameToSearch });
  };

  const { cities, refetchCities, isFetching } = useGetCitiesAPI(requestQuery);
  const { deleteCity, isPending } = useDeleteCityAPI(
    refetchCities,
    handleCloseConfirmDeleteDialog
  );

  const renderCities = cities.map((city) => (
    <Grid item xs={12} md={6} key={city.id}>
      <City
        city={city}
        handleUpdateCity={handleUpdateCity}
        handleOpenConfirmDeleteDialog={handleOpenConfirmDeleteDialog}
      />
    </Grid>
  ));

  if (isFetching) return <BlockUI />;

  return (
    <StyledContainer>
      <Container sx={{ pt: 14 }}>
        <Stack gap={2}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h4" component="h1">
              Cities
            </Typography>
            <Stack direction="row" gap={2}>
              <TextField
                placeholder="Search by name"
                size="small"
                value={nameToSearch}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  if (event.target.value) setNameToSearch(event.target.value);
                  else setRequestQuery({ ...requestQuery, name: "" });
                }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSearchForCity}
                disabled={requestQuery.name === nameToSearch}
                endIcon={<Search />}
              >
                Search
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleOpenCityFormDialog}
                endIcon={<Plus />}
              >
                Add City
              </Button>
            </Stack>
          </Stack>
          <Grid container spacing={2}>
            {renderCities}
          </Grid>
        </Stack>
        <Stack justifyContent="center" alignItems="center" my={5}></Stack>
      </Container>
      <AddCityDialog
        isOpen={isCityFormDialogOpen}
        cityToUpdate={cityToUpdate}
        refetchCities={refetchCities}
        handleCloseCityFormDialog={handleCloseCityFormDialog}
      />
      <ConfirmActionDialog
        isOpen={isConfirmDeleteDialogOpen}
        title="Delete Hotel Room"
        description={`Are you sure you want to delete a ${cityToDelete.name} city`}
        handleClose={handleCloseConfirmDeleteDialog}
        actions={[
          {
            text: "Yes, Sure!",
            onClick: handleDelete,
            variant: "contained",
            loading: isPending,
            size: "small",
          },
          {
            text: "Cancel",
            onClick: handleCloseConfirmDeleteDialog,
            variant: "outlined",
            size: "small",
          },
        ]}
      />
    </StyledContainer>
  );
};

const withRouteHoC = routeHOC({
  title: "Cities",
  pageAccessName: "Cities",
});

export default withRouteHoC(Cities);
