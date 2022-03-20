import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { margin: "0" },
      },
    },
  },
  palette: {
    primary: {
      dark: "#495371",
      main: "#74959A",
      light: "#98B4AA",
      contrastText: "#fbf7e9",
    },
    secondary: {
      dark: "#e5c566",
      main: "#F1E0AC",
      contrastText: "#495371",
    },
    text: {
      primary: "#fbf7e9",
      secondary: "#495371",
      disabled: "#d5d8dd",
    },
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
