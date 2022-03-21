import { Box, useTheme, IconButton, Slide } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FiverrLogo from "images/fiverrLogo.png";
const Contact = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: 2,
        background: "transparent",
        height: `calc(100vh - ${theme.spacing(25)})`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
        },
        overflow: "hidden",
      }}
    >
      <Slide in easing={{ enter: "cubic-bezier(1,-0.21,0,1.24)" }} timeout={700}>
        <IconButton
          color="secondary"
          sx={{ height: "fit-content" }}
          href="mailto:acorbinelli@gmail.com?subject=Your Subject&body=message%20goes%20here"
        >
          <AlternateEmailIcon sx={{ fontSize: theme.typography.h1.fontSize }} />
        </IconButton>
      </Slide>
      <Slide in direction="up" easing={{ enter: "cubic-bezier(1,-0.21,0,1.24)" }} timeout={700}>
        <IconButton
          color="secondary"
          sx={{ height: "fit-content" }}
          onClick={() => window.open("https://www.linkedin.com/in/alessandro-corbinelli/", "_blank")}
        >
          <LinkedInIcon sx={{ fontSize: theme.typography.h1.fontSize }} />
        </IconButton>
      </Slide>
      <Slide in easing={{ enter: "cubic-bezier(1,-0.21,0,1.24)" }} timeout={700}>
        <IconButton
          color="secondary"
          sx={{ height: "fit-content" }}
          onClick={() => window.open("https://github.com/acorbinelli", "_blank")}
        >
          <GitHubIcon sx={{ fontSize: theme.typography.h1.fontSize }} />
        </IconButton>
      </Slide>
      <Slide in direction="up" easing={{ enter: "cubic-bezier(1,-0.21,0,1.24)" }} timeout={700}>
        <IconButton
          color="secondary"
          sx={{ height: "fit-content" }}
          onClick={() => window.open("https://www.fiverr.com/acorbinelli", "_blank")}
        >
          <img src={FiverrLogo} alt="fiverr" height={theme.spacing(10)} />
        </IconButton>
      </Slide>
    </Box>
  );
};

export default Contact;
