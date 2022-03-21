import { FC } from "react";
import { Box, Paper, Slide, useTheme, useMediaQuery, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import CreatePicture1 from "images/create.jpg";
import CreatePicture2 from "images/create2.jpg";
import CreatePicture3 from "images/create3.jpg";
import BuildPicture1 from "images/build.jpg";
import BuildPicture2 from "images/build2.jpg";
import BuildPicture3 from "images/build3.jpg";
import FixPicture1 from "images/fix.jpg";
import FixPicture2 from "images/fix2.jpg";
import FixPicture3 from "images/fix3.jpg";

const contentItems = [
  {
    width: "80%",
    picture: CreatePicture1,
    title: "Plan",
    description: "Plan ahead of start. Make agreements.",
    timeout: 600,
    category: "Create",
    id: nanoid(),
  },
  {
    width: "90%",
    picture: CreatePicture2,
    title: "Consult",
    description: "Update. Consolidate. Confirm.",
    timeout: 800,
    category: "Create",
    id: nanoid(),
  },
  {
    width: "100%",
    picture: CreatePicture3,
    title: "Sketch",
    description: "Wireframing. High level design.",
    timeout: 1000,
    category: "Create",
    id: nanoid(),
  },
  {
    width: "80%",
    picture: BuildPicture1,
    title: "Code",
    description: "Layout. Components. API Integration, Unit tests.",
    timeout: 600,
    category: "Build",
    id: nanoid(),
  },
  {
    width: "90%",
    picture: BuildPicture2,
    title: "Assemble",
    description: "Code cleanup. Final tests. Build for production.",
    timeout: 800,
    category: "Build",
    id: nanoid(),
  },
  {
    width: "100%",
    picture: BuildPicture3,
    title: "Deploy",
    description: "Deploy to web server. Source code delivery.",
    timeout: 1000,
    category: "Build",
    id: nanoid(),
  },
  {
    width: "80%",
    picture: FixPicture1,
    title: "Repair",
    description: "Find bugs. Provide solutions. Fix problems.",
    timeout: 600,
    category: "Fix",
    id: nanoid(),
  },
  {
    width: "90%",
    picture: FixPicture2,
    title: "Organize",
    description: "Restructure. Refactor. Cleanup.",
    timeout: 800,
    category: "Fix",
    id: nanoid(),
  },
  {
    width: "100%",
    picture: FixPicture3,
    title: "Improve",
    description: "Strongtype. Render frequency. Update.",
    timeout: 1000,
    category: "Fix",
    id: nanoid(),
  },
];

const Content: FC<{ activeLink: string }> = ({ activeLink }) => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box
      sx={{
        width: "50%",
        flex: 1,
        mr: 4,
        [theme.breakpoints.down("lg")]: {
          width: "100%",
          mx: 2,
          px: 2,
        },
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        sx={{
          width: "100%",
          overflow: "hidden",
          zIndex: 30,
          height: "90%",
          mt: 2,
          [theme.breakpoints.down("md")]: {
            justifyContent: "initial",
          },
        }}
      >
        {contentItems.map((item) =>
          activeLink === item.category ? (
            <Slide key={item.id} in direction="left" timeout={item.timeout}>
              <Paper
                elevation={5}
                sx={{
                  width: item.width,
                  flex: 0.2,
                  backgroundImage: `url(${item.picture})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: 2,
                  mb: 3,
                  display: "flex",
                  alignItems: "center",
                  p: 2,
                  [theme.breakpoints.down("md")]: {
                    width: "100%",
                    my: 2,
                    flex: 0.3,
                    height: "auto",
                  },
                  [theme.breakpoints.down("sm")]: {
                    width: "100%",
                  },
                  "&>*": {
                    display: "none",
                  },
                  "&:hover": {
                    backgroundImage: `linear-gradient(347deg, rgba(21,23,32,0.5) 0%, rgba(73,83,113,1) 89%, rgba(82,95,133,1) 100%),url(${item.picture})`,
                    "&>*": {
                      display: "initial",
                    },
                  },
                }}
              >
                {!isMedium && (
                  <Box
                    sx={{
                      width: (theme) => theme.spacing(0.1),
                      height: "100%",
                      background: (theme) => theme.palette.secondary.main,
                      mr: 3,
                    }}
                  />
                )}
                <Box>
                  <Typography
                    color="secondary"
                    variant="h4"
                    sx={{
                      fontWeight: 300,
                      borderBottom: `1px solid ${theme.palette.secondary.main}`,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography color="secondary" variant="body2" sx={{ fontWeight: 300, mt: 1 }}>
                    {item.description}
                  </Typography>
                </Box>
              </Paper>
            </Slide>
          ) : null
        )}
      </Box>
    </Box>
  );
};

export default Content;
