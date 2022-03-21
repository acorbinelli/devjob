import { Box, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box sx={{ width: "100%", borderTop: `1px solid ${theme.palette.secondary.main + "66"}`, px: 2, py: 1 }}>
      <Typography color="secondary" variant="caption" sx={{ opacity: 0.4 }}>
        © 2022 devjob.digital - Create, Build, Fix
      </Typography>
    </Box>
  );
};

export default Footer;
