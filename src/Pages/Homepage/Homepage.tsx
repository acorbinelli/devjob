import { useEffect, useRef, useState } from "react";
import { Box, useTheme, Paper, Fade, Typography, Slide, useMediaQuery } from "@mui/material";
import CreateImage from "images/create.jpg";
import BuildImage from "images/build.jpg";
import { Navigation, NavigationSmallScreen } from "./Navigation";
import Content from "./Content";

const Homepage = () => {
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState<string>("Create");
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const onClickLink = (item: string) => {
    setActiveLink(item);
  };

  return (
    <Box
      sx={{
        mt: 2,
        background: "transparent",
        height: `calc(100vh - ${theme.spacing(25)})`,
      }}
      display="flex"
      justifyContent={"space-between"}
    >
      {isSmall ? (
        <>
          <NavigationSmallScreen activeLink={activeLink} onClick={onClickLink} />
        </>
      ) : (
        <>
          <Navigation activeLink={activeLink} onClick={onClickLink} />
          <Content activeLink={activeLink} />
        </>
      )}
    </Box>
  );
};

export default Homepage;
