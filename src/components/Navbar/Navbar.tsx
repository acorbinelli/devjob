import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, useTheme, IconButton, useMediaQuery, Typography } from "@mui/material";
import Logo from "images/LogoWhite.png";
import { appRoutes } from "routes";
import Button from "components/Button";
import RotatingGear from "./RotatingGear";

const Navbar = () => {
  const theme = useTheme();
  const [currentPage, setCurrentPage] = useState<string>("");
  const navigate = useNavigate();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

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
        [theme.breakpoints.up("md")]: {
          height: theme.spacing(10),
          width: "100%",
        },
        [theme.breakpoints.down("md")]: {
          height: theme.spacing(7),
          width: "80%",
        },
      }}
    >
      <RotatingGear selected={currentPage} position={{ left: -30, bottom: -10 }} />
      <RotatingGear selected={currentPage} position={{ right: -30, bottom: -10 }} />
      <IconButton
        disableRipple
        sx={{
          marginRight: theme.spacing(3),
          "&>img": {
            [theme.breakpoints.up("md")]: {
              height: theme.spacing(10),
              width: theme.spacing(10),
            },
            [theme.breakpoints.down("md")]: {
              height: theme.spacing(8),
              width: theme.spacing(8),
            },
          },
        }}
      >
        <img src={Logo} alt="logo" />
      </IconButton>
      {!isSmall && (
        <>
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
          <Button
            selected={currentPage === "contact"}
            onClick={() => onClick("/contact", "contact")}
            label="contact me"
          />
        </>
      )}
    </Container>
  );
};

export default Navbar;
