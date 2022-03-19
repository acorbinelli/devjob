import { useState } from "react";
import { Box, Container, useTheme, IconButton } from "@mui/material";
import Logo from "images/LogoWhite.png";
import { useNavigate } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import { appRoutes } from "routes";

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
        borderBottom: "1px solid white",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
    >
      <IconButton sx={{ marginRight: theme.spacing(3) }}>
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
            <NavbarItem
              key={route.name}
              selected={route.name === currentPage}
              onClick={() => onClick(route.path, route.name)}
              label={route.name}
            />
          ) : null
        )}
      </Box>
      <NavbarItem
        selected={currentPage === "contact"}
        onClick={() => onClick("/contact", "contact")}
        label="contact me"
      />
    </Container>
  );
};

export default Navbar;
