import BlockUI from "@/containers/BlockUI";
import useGetPremiumChoicesAPI from "../hooks/useGetPremiumChoicesAPI";
import PremiumChoice from "./PremiumChoice";
import { Container, Grid, Typography } from "@mui/material";

const PremiumChoices = () => {
  const { premiumChoices, isFetching } = useGetPremiumChoicesAPI();

  const renderPremiumChoices = premiumChoices?.map((choice) => (
    <Grid item key={choice.hotelId} xs={6}>
      <PremiumChoice chioce={choice} />
    </Grid>
  ));

  if (isFetching) return <BlockUI />;

  return (
    <Container id="premium choices" sx={{ py: { xs: 4, sm: 8 } }}>
      <Typography
        component="h2"
        variant="h4"
        fontWeight={600}
        color="text.primary"
        sx={{ my: 2 }}
      >
        Premium Choices
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {renderPremiumChoices}
      </Grid>
    </Container>
  );
};

export default PremiumChoices;
