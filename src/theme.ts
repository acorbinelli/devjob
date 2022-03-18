import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { m: "0" },
      },
    },
  },
  palette: {
    primary: {
      main: "#fff1",
    },
    secondary: {
      main: "#000fff",
    },
    text: {},
    success: {
      main: "#ff00bc",
    },
    warning: {
      main: "#ff00bc",
    },
    error: {
      main: "#ff00bc",
    },
  },
});
