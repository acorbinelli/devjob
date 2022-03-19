import { useState } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { Navigation /* NavigationSmallScreen */ } from "./Navigation";
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
    >
      {isSmall ? (
        <>{/*  <NavigationSmallScreen activeLink={activeLink} onClick={onClickLink} /> */}</>
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
