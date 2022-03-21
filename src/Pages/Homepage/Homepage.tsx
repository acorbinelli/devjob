import { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { ContentMenu } from "./ContentMenu";
import Content from "./Content";

const Homepage = () => {
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState<string>("Create");
  const onClickLink = (item: string) => {
    setActiveLink(item);
  };

  return (
    <Box
      sx={{
        overflow: "hidden",
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
