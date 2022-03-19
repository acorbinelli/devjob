import { useEffect, useRef, useState } from "react";
import { Box, useTheme, Paper, Fade, Typography, Slide } from "@mui/material";
import CreateImage from "images/create.jpg";
import BuildImage from "images/build.jpg";
import Navigation from "./Navigation";
import Content from "./Content";

const Homepage = () => {
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState<string>("create");

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
      <Navigation activeLink={activeLink} onClick={onClickLink} />
      <Content activeLink={activeLink} />
    </Box>
  );
};

export default Homepage;
