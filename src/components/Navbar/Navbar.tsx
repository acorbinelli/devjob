import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, useTheme, IconButton, useMediaQuery, Modal, Fade } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { appRoutes } from "routes";
import Logo from "images/LogoWhite.png";
import Button from "components/Button";
import RotatingGear from "./RotatingGear";

const Navbar = () => {
  const theme = useTheme();
  const [currentPage, setCurrentPage] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const onClick = (path: string, currentPage: string) => {
    setCurrentPage(currentPage);
    navigate(path);
    if (isSmall) {
      toggleOpenModal();
    }
  };

  const toggleOpenModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <>
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
          },
          [theme.breakpoints.down("sm")]: {
            height: theme.spacing(7),
            mt: 5,
          },
        }}
      >
        <IconButton
          disableRipple
          sx={{
            marginRight: theme.spacing(3),
            "&>img": {
              [theme.breakpoints.up("md")]: {
                height: theme.spacing(11),
                width: theme.spacing(11),
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
            <RotatingGear
              selected={currentPage}
              position={{ left: !isMedium ? -30 : 10, bottom: !isMedium ? -10 : -30 }}
            />
            <RotatingGear
              selected={currentPage}
              position={{ right: !isMedium ? -30 : 10, bottom: !isMedium ? -10 : -30 }}
            />
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

        {isSmall && !openModal && (
          <IconButton onClick={toggleOpenModal}>
            <MenuIcon color="secondary" fontSize="large" />
          </IconButton>
        )}
      </Container>
      <Fade in={openModal} mountOnEnter unmountOnExit>
        <Box>
          <Modal open>
            <Box
              display="flex"
              alignItems="flex-start"
              flexDirection="column"
              sx={{ height: "100%", width: (theme) => theme.spacing(20), background: "black" }}
            >
              <IconButton onClick={toggleOpenModal} sx={{ mt: 6, ml: 2 }}>
                <CloseIcon color="secondary" fontSize="large" />
              </IconButton>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="center"
                sx={{ "&>*": { mt: 4 }, p: 3, height: "100%" }}
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
                <Button
                  selected={currentPage === "contact"}
                  onClick={() => onClick("/contact", "contact")}
                  label="contact me"
                />
              </Box>
            </Box>
          </Modal>
        </Box>
      </Fade>
    </>
  );
};

export default Navbar;
