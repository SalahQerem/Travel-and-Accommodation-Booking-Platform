import { defaultRequestQuery } from "@/constants";
import BlockUI from "@/containers/BlockUI";
import StyledContainer from "@/containers/StyledContainer";
import routeHOC from "@/routes/HOCs/routeHOC";
import { City as CityType, RequestQuery } from "@/types";
import {
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import AddCityDialog from "./components/AddCityDialog";
import City from "./components/City";
import { defaultCity } from "./constants";
import useGetCitiesAPI from "./hooks/useGetCitiesAPI";
import { Plus, Search } from "lucide-react";

const Cities = () => {
  const [isCityFormDialogOpen, setIsCityFormDialogOpen] =
    useState<boolean>(false);
  const [cityToUpdate, setCityToUpdate] = useState<CityType>(defaultCity);
  const [nameToSearch, setNameToSearch] = useState<string>("");
  const [requestQuery, setRequestQuery] =
    useState<RequestQuery>(defaultRequestQuery);

  const { cities, refetchCities, isFetching } = useGetCitiesAPI(requestQuery);

  const handleOpenCityFormDialog = () => {
    setIsCityFormDialogOpen(true);
  };
  const handleCloseCityFormDialog = () => {
    setIsCityFormDialogOpen(false);
  };

  const handleUpdateCity = (city: CityType) => {
    setIsCityFormDialogOpen(true);
    setCityToUpdate(city);
  };

  const handleSearchForCity = () => {
    setRequestQuery({ ...requestQuery, name: nameToSearch });
  };

  const renderCities = cities?.map((city) => (
    <Grid item xs={12} md={6} key={city.id}>
      <City
        city={city}
        refetchCities={refetchCities}
        handleUpdateCity={handleUpdateCity}
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
                value={nameToSearch}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setNameToSearch(event.target.value)
                }
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
    </StyledContainer>
  );
};

const withRouteHoC = routeHOC({
  title: "Cities",
  pageAccessName: "Cities",
});

export default withRouteHoC(Cities);
