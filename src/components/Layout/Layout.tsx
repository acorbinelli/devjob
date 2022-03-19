import { Grid, useTheme, useMediaQuery, Typography } from "@mui/material";
import Navbar from "components/Navbar";
import ReactLogo from "images/reactLogo.png";

const Layout = ({ children }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Grid
      sx={{
        flexGrow: 1,
        background: "linear-gradient(347deg, rgba(21,23,32,1) 0%, rgba(73,83,113,1) 89%, rgba(82,95,133,1) 100%)",
      }}
      container
    >
      <Grid item md={2} xs={0} />
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          minHeight: "100vh",
          "&>img": {
            [theme.breakpoints.up("md")]: {
              height: theme.spacing(100),
              width: theme.spacing(105),
            },
            [theme.breakpoints.down("md")]: {
              height: theme.spacing(30),
              width: theme.spacing(30),
            },
          },
        }}
      >
        <Navbar />
        {isSmall ? (
          <Typography sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
            RESPONSIVENESS SOON
          </Typography>
        ) : (
          children
        )}
        <img
          src={ReactLogo}
          alt="react logo"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 0,

            opacity: 0.02,
          }}
        />
      </Grid>
      <Grid item md={2} xs={0} />
    </Grid>
  );
};

export default Layout;
