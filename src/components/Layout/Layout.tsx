import { Grid } from "@mui/material";
import BackgroundImageMedium from "images/backgroundMedium.jpg";
import Navbar from "components/Navbar";

const Layout = ({ children }) => {
  return (
    <Grid
      sx={{
        flexGrow: 1,
        backgroundImage: `url(${BackgroundImageMedium})`,
        backgroundSize: "cover",
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
