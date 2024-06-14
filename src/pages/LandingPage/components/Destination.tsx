import { Box, Card, Grid } from "@mui/material";

const Destination = () => {
  return (
    <Grid
      item
      xs={12}
      md={6}
      sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}
    >
      <Card
        variant="outlined"
        sx={{
          height: "100%",
          width: "100%",
          display: { xs: "none", sm: "flex" },
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            m: "auto",
            width: 420,
            height: 500,
            backgroundSize: "contain",
          }}
        />
      </Card>
    </Grid>
  );
};

export default Destination;
