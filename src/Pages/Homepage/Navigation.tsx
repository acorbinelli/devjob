import { useRef, FC } from "react";
import { Box, useTheme, Fade, Typography, Slide } from "@mui/material";
import LinkItem from "./LinkItem";
import CreateImage from "images/create.jpg";
import BuildImage from "images/build.jpg";

const linkItems = ["create", "build", "fix"];
const descriptions = [
  { id: "create", text: "Create beautiful and simple designs", picture: CreateImage },
  { id: "build", text: "Build functional and responsive web apps", picture: BuildImage },
  { id: "fix", text: "Debug and improve existing react apps", picture: "" },
];

interface NavigationProps {
  activeLink: string;
  onClick: (item: string) => void;
}

const Navigation: FC<NavigationProps> = ({ activeLink, onClick }) => {
  const theme = useTheme();
  const descriptionContainerRef = useRef(null);

  return (
    <Box
      sx={{
        height: "100%",
        width: "50%",
        display: "flex",
        alignItems: "center",
        ml: 3,
        zIndex: 10,
      }}
    >
      <Fade in timeout={500}>
        <Box
          display="flex"
          flexDirection="column"
          sx={{ overflow: "hidden", borderLeft: `1px solid ${theme.palette.secondary.main}` }}
        >
          <Slide in timeout={500} direction="right">
            <Box
              display="flex"
              ref={descriptionContainerRef}
              flexDirection="column"
              sx={{ ml: 3, overflow: "hidden", position: "relative", height: (theme) => theme.spacing(20) }}
            >
              <Box display="flex">
                {linkItems.map((item) => (
                  <Box key={item} display="flex">
                    <LinkItem
                      label={item}
                      onClick={() => {
                        onClick(item);
                      }}
                      selected={item === activeLink}
                    />
                    <Typography variant="h2" color="secondary" sx={{ mr: 2 }}>
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
                    variant="h6"
                    sx={{ px: 1, mt: 2, mb: 3, fontWeight: 300, position: "absolute", bottom: 0 }}
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
  );
};

export default Navigation;
