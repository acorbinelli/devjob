import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, Box } from "@mui/material";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ background: "red", m: 0, p: 0 }}>AAAAAAAAAAA</Box>
    </ThemeProvider>
  );
}

export default App;
