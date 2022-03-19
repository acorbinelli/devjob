import { Box, useTheme, Paper } from "@mui/material";

const About = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: 2,
        background: "transparent",
        height: `calc(100vh - ${theme.spacing(25)})`,
      }}
    ></Box>
  );
};

export default About;
