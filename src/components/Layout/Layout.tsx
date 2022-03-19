import { Grid, useTheme } from "@mui/material";
import BackgroundImageMedium from "images/backgroundMedium.jpg";
import Navbar from "components/Navbar";
import ReactLogo from "images/reactLogo.png";

const Layout = ({ children }) => {
  const theme = useTheme();
  return (
    <Grid
      sx={{
        flexGrow: 1,
        background: "linear-gradient(347deg, rgba(21,23,32,1) 0%, rgba(73,83,113,1) 89%, rgba(82,95,133,1) 100%)",
      }}
      container
    >
      <Grid item xs={2} />
      <Grid item xs={8} sx={{ minHeight: "100vh" }}>
        <Navbar />
        {children}
        <img
          src={ReactLogo}
          alt="react logo"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 0,
            width: theme.spacing(120),
            height: theme.spacing(100),
            opacity: 0.02,
          }}
        />
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};

export default Layout;
