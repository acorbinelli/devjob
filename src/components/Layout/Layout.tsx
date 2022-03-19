import { Grid } from "@mui/material";
import BackgroundImageMedium from "images/backgroundMedium.jpg";
import Navbar from "components/Navbar";

const Layout = ({ children }) => {
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
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};

export default Layout;
