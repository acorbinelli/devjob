import { Box, useTheme, Paper, Fade, Typography, Slide, Grid } from "@mui/material";
import Button from "components/Button";
import { useState } from "react";

const Showcase = () => {
  const theme = useTheme();
  const [selectedProject, setSelectedProject] = useState<string>("thystyle");
  return (
    <Box
      sx={{
        mt: 2,
        background: "transparent",
        height: `calc(100vh - ${theme.spacing(25)})`,
        overflow: "hidden",
      }}
    >
      <Box>
        <Slide in direction="down">
          <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <Box
              sx={{
                borderBottom: (theme) => `1px solid ${theme.palette.secondary.main}`,
                width: `calc(100% - ${theme.spacing(10)})`,
                px: 4,
              }}
            >
              <Button label="thystyle" onClick={() => {}} selected={selectedProject === "thystyle"} />
            </Box>
          </Box>
        </Slide>
        <Grid container sx={{ mt: 2 }}>
          <Grid item md={6} sx={{ background: "red", height: (theme) => theme.spacing(200) }}>
            <Slide in direction="right">
              <Box>
                <Typography>AAAAAAAAA</Typography>
              </Box>
            </Slide>
          </Grid>
          <Grid item md={6}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Showcase;
