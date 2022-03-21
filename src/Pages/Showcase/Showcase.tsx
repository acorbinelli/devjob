import { Box, useTheme, Slide } from "@mui/material";
import Button from "components/Button";
import { useState } from "react";
import Carousel from "./Carousel";

const Showcase = () => {
  const theme = useTheme();
  const [selectedProject, setSelectedProject] = useState<string>("project1");

  const onClick = (projectName: string) => {
    setSelectedProject(projectName);
  };
  return (
    <Box
      sx={{
        mt: 2,
        background: "transparent",
        height: `calc(100vh - ${theme.spacing(22)})`,
        overflow: "hidden",
      }}
    >
      <Box>
        <Slide in direction="down" easing={{ enter: "cubic-bezier(1,-0.21,0,1.24)" }} timeout={700}>
          <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <Box
              display="flex"
              justifyContent="space-evenly"
              sx={{
                borderBottom: (theme) => `1px solid ${theme.palette.secondary.main}`,
                width: "100%",
                [theme.breakpoints.down("md")]: {
                  px: 5,
                },
                px: 4,
              }}
            >
              <Button label="project1" onClick={() => onClick("project1")} selected={selectedProject === "project1"} />
              <Button label="project2" onClick={() => onClick("project2")} selected={selectedProject === "project2"} />
              <Button label="project3" onClick={() => onClick("project3")} selected={selectedProject === "project3"} />
            </Box>
          </Box>
        </Slide>
        <Carousel />
      </Box>
    </Box>
  );
};

export default Showcase;
