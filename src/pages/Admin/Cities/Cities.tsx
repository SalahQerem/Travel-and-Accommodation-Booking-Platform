import ConfirmActionDialog from "@/components/ConfirmActionDialog";
import FilterForm from "@/components/FilterForm";
import Loader from "@/components/Loader";
import StyledContainer from "@/containers/StyledContainer";
import routeHOC from "@/routes/HOCs/routeHOC";
import useGetCitiesAPI from "@/services/useGetCitiesAPI";
import { City as CityType } from "@/types";
import { globalFilter } from "@/utils";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddCityDialog from "./components/AddCityDialog";
import City from "./components/City";
import { defaultCity, searchOptions } from "./constants";
import useDeleteCityAPI from "./hooks/useDeleteCityAPI";

const Cities = () => {
  const [isCityFormDialogOpen, setIsCityFormDialogOpen] =
    useState<boolean>(false);
  const [cityToUpdate, setCityToUpdate] = useState<CityType>(defaultCity);
  const [cityToDelete, setCityToDelete] = useState(defaultCity);
  const [searchQuery, setSearchQuery] = useState<string>("");
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

  const { cities, isFetching } = useGetCitiesAPI();
  const { deleteCity, isPending } = useDeleteCityAPI(
    cityToDelete,
    handleCloseConfirmDeleteDialog
  );

  const renderCities = globalFilter(cities, searchOptions, searchQuery).map(
    (city) => (
      <Grid item xs={12} md={6} key={city.id}>
        <City
          city={city}
          handleUpdateCity={handleUpdateCity}
          handleOpenConfirmDeleteDialog={handleOpenConfirmDeleteDialog}
        />
      </Grid>
    )
  );

  return (
    <StyledContainer>
      <Container sx={{ py: 14 }}>
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
              <FilterForm
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
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
            {isFetching ? <Loader /> : renderCities}
          </Grid>
        </Stack>
      </Container>
      <AddCityDialog
        isOpen={isCityFormDialogOpen}
        cityToUpdate={cityToUpdate}
        setCityToUpdate={setCityToUpdate}
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
