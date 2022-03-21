import { useRef, FC } from "react";
import { Box, useTheme, Fade, Typography, Slide } from "@mui/material";
import LinkItem from "./LinkItem";
import CreateImage from "images/create.jpg";
import BuildImage from "images/build.jpg";

const linkItems = ["Create", "Build", "Fix"];
const descriptions = [
  { id: "Create", text: "Create beautiful and simple designs", picture: CreateImage },
  { id: "Build", text: "Build functional and responsive web apps", picture: BuildImage },
  { id: "Fix", text: "Debug and improve existing react apps", picture: "" },
];

interface ContentMenuProps {
  activeLink: string;
  onClick: (item: string) => void;
}

export const ContentMenu: FC<ContentMenuProps> = ({ activeLink, onClick }) => {
  const theme = useTheme();
  const descriptionContainerRef = useRef(null);

  return (
    <Slide in easing={{ enter: "cubic-bezier(1,-0.21,0,1.24)" }} timeout={700}>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          zIndex: 10,
          [theme.breakpoints.down("md")]: {
            mt: 2,
            justifyContent: "center",
            borderBottom: `1px solid ${theme.palette.secondary.main}`,
            width: "100%",
          },
        }}
      >
        <Fade in timeout={500}>
          <Box
            display="flex"
            flexDirection="column"
            sx={{
              overflow: "hidden",
              borderLeft: `1px solid ${theme.palette.secondary.main}`,
              [theme.breakpoints.down("md")]: {
                borderLeft: "none",
              },
            }}
          >
            <Slide in timeout={500} direction="down">
              <Box
                display="flex"
                ref={descriptionContainerRef}
                flexDirection="column"
                sx={{
                  ml: 3,
                  overflow: "hidden",
                  position: "relative",
                  zIndex: 100,
                  height: (theme) => theme.spacing(20),
                  [theme.breakpoints.down("sm")]: {
                    height: (theme) => theme.spacing(15),
                  },
                }}
              >
                <Box display="flex">
                  {linkItems.map((item) => (
                    <Box key={item} display="flex" alignItems="flex-end">
                      <LinkItem
                        label={item}
                        onClick={() => {
                          onClick(item);
                        }}
                        selected={item === activeLink}
                      />
                      <Typography
                        color="secondary"
                        sx={{
                          mr: 2,
                          fontWeight: 300,
                          [theme.breakpoints.up("lg")]: { fontSize: 50 },
                          [theme.breakpoints.down("lg")]: { fontSize: 35 },
                          [theme.breakpoints.down("sm")]: { fontSize: 25 },
                        }}
                      >
                        {linkItems.indexOf(item) === linkItems.length - 1 ? "" : ","}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                {descriptions.map((description) => (
                  <Slide
                    key={description.id}
                    in={description.id === activeLink}
                    unmountOnExit
                    mountOnEnter
                    container={descriptionContainerRef.current}
                    direction="right"
                    timeout={900}
                    easing={{ enter: "cubic-bezier(1,-0.21,0,1.24)" }}
                  >
                    <Typography
                      color="secondary"
                      variant={"h6"}
                      sx={{
                        px: 1,
                        mb: 3,
                        fontWeight: 300,
                        position: "absolute",
                        bottom: -10,
                        [theme.breakpoints.down("sm")]: { fontSize: 15, bottom: -10 },
                      }}
                    >
                      {description.text}
                    </Typography>
                  </Slide>
                ))}
              </Box>
            </Slide>
          </Box>
        </Fade>
      </Box>
    </Slide>
  );
};

/* export const ContentMenuSmallScreen: FC<ContentMenuProps> = ({ activeLink, onClick }) => {
  return <div />;
}; */
