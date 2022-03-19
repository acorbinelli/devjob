import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, useTheme, IconButton } from "@mui/material";
import Logo from "images/LogoWhite.png";
import { appRoutes } from "routes";
import Button from "components/Button";
import RotatingGear from "./RotatingGear";

const Navbar = () => {
  const theme = useTheme();
  const [currentPage, setCurrentPage] = useState<string>("");
  const navigate = useNavigate();

  const onClick = (path: string, currentPage: string) => {
    setCurrentPage(currentPage);
    navigate(path);
  };

  return (
    <Container
      sx={{
        mt: 3,
        display: "flex",
        borderBottom: (theme) => `1px solid ${theme.palette.secondary.main}`,
        justifyContent: "space-between",
        alignItems: "flex-end",
        position: "relative",
        zIndex: 10,
      }}
    >
      <RotatingGear selected={currentPage} position={{ left: -30, bottom: -10 }} />
      <RotatingGear selected={currentPage} position={{ right: -30, bottom: -10 }} />
      <IconButton disableRipple sx={{ marginRight: theme.spacing(3) }}>
        <img src={Logo} alt="logo" style={{ width: 90, height: 90 }} />
      </IconButton>
      <Box
        display="flex"
        sx={{
          alignItems: "flex-end",
          "&>*": { ml: 3 },
        }}
      >
        {appRoutes.map((route) =>
          route.name !== "contact" ? (
            <Button
              key={route.name}
              selected={route.name === currentPage}
              onClick={() => onClick(route.path, route.name)}
              label={route.name}
            />
          ) : null
        )}
      </Box>
      <Button selected={currentPage === "contact"} onClick={() => onClick("/contact", "contact")} label="contact me" />
    </Container>
  );
};

export default Navbar;
