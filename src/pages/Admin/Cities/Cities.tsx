import { defaultRequestQuery } from "@/constants";
import BlockUI from "@/containers/BlockUI";
import StyledContainer from "@/containers/StyledContainer";
import routeHOC from "@/routes/HOCs/routeHOC";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import City from "./components/City";
import useGetCitiesAPI from "./hooks/useGetCitiesAPI";
import AddCityDialog from "./components/AddCityDialog";
import { useState } from "react";

const Cities = () => {
  const [isAddCityDialogOpen, setIsAddCityDialogOpen] =
    useState<boolean>(false);

  const { cities, refetchCities, isFetching } =
    useGetCitiesAPI(defaultRequestQuery);

  const handleOpenAddCityDialog = () => {
    setIsAddCityDialogOpen(true);
  };
  const handleCloseAddCityDialog = () => {
    setIsAddCityDialogOpen(false);
  };

  const renderCities = cities?.map((city) => (
    <Grid item xs={12} md={6} key={city.id}>
      <City city={city} refetchCities={refetchCities} />
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
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenAddCityDialog}
            >
              Add City
            </Button>
          </Stack>
          <Grid container spacing={2}>
            {renderCities}
          </Grid>
        </Stack>
        <Stack justifyContent="center" alignItems="center" my={5}></Stack>
      </Container>
      <AddCityDialog
        isOpen={isAddCityDialogOpen}
        refetchCities={refetchCities}
        handleCloseAddCityDialog={handleCloseAddCityDialog}
      />
    </StyledContainer>
  );
};

const withRouteHoC = routeHOC({
  title: "Cities",
  pageAccessName: "Cities",
});

export default withRouteHoC(Cities);
