import { Box, useTheme, Paper, Fade } from "@mui/material";

const About = () => {
  const theme = useTheme();
  return (
    <Fade in timeout={800}>
      <Paper
        elevation={20}
        sx={{
          mt: 2,
          background: "transparent",
          height: `calc(100vh - ${theme.spacing(25)})`,
        }}
      ></Paper>
    </Fade>
  );
};

export default About;
