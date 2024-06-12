import Providers from "./Providers";
import Snackbar from "./components/Snackbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Providers>
      <AppRoutes />
      <Snackbar />
    </Providers>
  );
}

export default App;
