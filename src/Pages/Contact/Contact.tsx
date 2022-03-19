import { Box, useTheme, Paper, Fade } from "@mui/material";

const Contact = () => {
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

export default Contact;
