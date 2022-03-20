import { Box, useTheme, Paper, Button, Slide, Typography, ListItem, List, useMediaQuery } from "@mui/material";
import FacePicture from "images/MyFace.png";
import ReactLogo from "images/reactLogo.png";
import NodeJSLogo from "images/nodejsLogo.png";
import MongoLogo from "images/mongoLogo.png";
import MuiLogo from "images/muiLogo.png";
import RestLogo from "images/restLogo.png";
import { useState, useRef } from "react";

const About = () => {
  const theme = useTheme();
  const containerRef = useRef(null);
  const isSmaller = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        background: "transparent",
        height: `calc(100vh - ${theme.spacing(20)})`,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        [theme.breakpoints.down("md")]: { justifyContent: "center", alignItems: "center" },
        [theme.breakpoints.down("sm")]: { height: "auto" },
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{
          width: "100%",
          [theme.breakpoints.down("md")]: { flexDirection: "column", justifyContent: "center", alignItems: "center" },
        }}
      >
        <Slide in easing={{ enter: "cubic-bezier(1,-0.21,0,1.24)" }} timeout={700}>
          <Box
            ref={containerRef}
            sx={{
              p: 3,
              background: "transparent",
              overflow: "hidden",
              display: "flex",
              [theme.breakpoints.down("md")]: {
                flex: 1,
                width: "100%",
                justifyContent: "center",
              },
              [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
                alignItems: "center",
              },
            }}
          >
            <img
              alt="face"
              src={FacePicture}
              style={{
                width: theme.spacing(15),
                height: theme.spacing(15),
                zIndex: 30,
              }}
            />
            <Box sx={{ overflow: "hidden", ml: 3 }}>
              <Box>
                <Typography
                  variant="h3"
                  color="secondary"
                  sx={{
                    [theme.breakpoints.down("lg")]: {
                      fontSize: theme.typography.h4.fontSize,
                    },
                  }}
                >
                  Alessandro
                </Typography>
                <Typography color="secondary" variant="h6">
                  Frontend Developer
                </Typography>
                <Typography color="secondary" variant="subtitle1">
                  32 y/o, Romania
                </Typography>
                <Typography color="secondary" variant="body2" sx={{ maxWidth: theme.spacing(50) }}>
                  I develop professional grade web applications and solutions for big and small organizations. Some
                  interesting projects that I've worked with involve solutions like:
                </Typography>
                <List>
                  <ListItem sx={{ p: 0, m: 0 }}>
                    <Typography color="secondary" variant="caption">
                      - Data grids
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ p: 0, m: 0 }}>
                    <Typography color="secondary" variant="caption">
                      - Performant state management
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ p: 0, m: 0 }}>
                    <Typography color="secondary" variant="caption">
                      - Legacy API integration
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ p: 0, m: 0 }}>
                    <Typography color="secondary" variant="caption">
                      - Responsiveness
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ p: 0, m: 0 }}>
                    <Typography color="secondary" variant="caption">
                      - Accessibility
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ p: 0, m: 0 }}>
                    <Typography color="secondary" variant="caption">
                      - Context management
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ p: 0, m: 0 }}>
                    <Typography color="secondary" variant="caption">
                      - Smart form state validation
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ p: 0, m: 0 }}>
                    <Typography color="secondary" variant="caption">
                      - Unit testing, backend mocking
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ p: 0, m: 0 }}>
                    <Typography color="secondary" variant="caption">
                      - Agile methodologies
                    </Typography>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
        </Slide>
        <Slide in direction="left" easing={{ enter: "cubic-bezier(1,-0.21,0,1.24)" }} timeout={700}>
          <Paper
            elevation={10}
            sx={{
              p: 3,
              mr: 1,
              width: "fit-content",
              background: "transparent",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              overflowY: "auto",
              overflowX: "hidden",
              "&>img": {
                mb: 3,
              },
              [theme.breakpoints.down("md")]: {
                mt: 4,
                flexDirection: "row",
                "&>img": {
                  mb: 0,
                },
              },
            }}
          >
            <img
              alt="react"
              src={ReactLogo}
              style={{ width: theme.spacing(isSmaller ? 6 : 12), height: theme.spacing(isSmaller ? 5 : 10) }}
            />
            <img
              alt="nodejs"
              src={NodeJSLogo}
              style={{ width: theme.spacing(isSmaller ? 6 : 14), height: theme.spacing(isSmaller ? 6 : 12) }}
            />
            <img
              alt="mongo"
              src={MongoLogo}
              style={{
                width: theme.spacing(isSmaller ? 6 : 12),
                height: theme.spacing(isSmaller ? 6 : 12),
                borderRadius: 3,
              }}
            />
            <img
              alt="rest"
              src={RestLogo}
              style={{
                width: theme.spacing(isSmaller ? 8 : 15),
                height: theme.spacing(isSmaller ? 6 : 10),
                borderRadius: 3,
              }}
            />
            <img
              alt="mui"
              src={MuiLogo}
              style={{
                width: theme.spacing(isSmaller ? 6 : 12),
                height: theme.spacing(isSmaller ? 6 : 12),
                borderRadius: 3,
              }}
            />
          </Paper>
        </Slide>
      </Box>
    </Box>
  );
};

export default About;
