import { Box } from "@mui/material";
import LandingPage from "./pages/LandingPage";
import SaferThemeProvider from "./style/SaferThemeProvider";

function App() {
  return (
    <SaferThemeProvider>
      <Box sx={{ bgcolor: "background.default" }}>
        <LandingPage />
      </Box>
    </SaferThemeProvider>
  );
}

export default App;
