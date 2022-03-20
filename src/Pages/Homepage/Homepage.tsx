import { useState } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { ContentMenu /* NavigationSmallScreen */ } from "./ContentMenu";
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
        height: `calc(100vh - ${theme.spacing(20)})`,
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        },
      }}
      display="flex"
    >
      <ContentMenu activeLink={activeLink} onClick={onClickLink} />
      <Content activeLink={activeLink} />
    </Box>
  );
};

export default Homepage;
