import { FC } from "react";
import { Box, Typography, Slide, useTheme } from "@mui/material";
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

const createContent = [
  {
    width: "40%",
    picture: CreatePicture1,
    timeout: 600,
  },
  {
    width: "70%",
    picture: CreatePicture2,
    timeout: 800,
  },
  {
    width: "100%",
    picture: CreatePicture3,
    timeout: 1000,
  },
];

const buildContent = [
  {
    width: "40%",
    picture: BuildPicture1,
    timeout: 600,
  },
  {
    width: "70%",
    picture: BuildPicture2,
    timeout: 800,
  },
  {
    width: "100%",
    picture: BuildPicture3,
    timeout: 1000,
  },
];
const fixContent = [
  {
    width: "40%",
    picture: FixPicture1,
    timeout: 600,
  },
  {
    width: "70%",
    picture: FixPicture2,
    timeout: 800,
  },
  {
    width: "100%",
    picture: FixPicture3,
    timeout: 1000,
  },
];

const Content: FC<{ activeLink: string }> = ({ activeLink }) => {
  const getSlides = () => {
    switch (activeLink) {
      case "create":
        return createContent.map((item) => (
          <Slide key={nanoid()} in direction="left" timeout={item.timeout}>
            <Box
              sx={{
                width: item.width,
                height: (theme) => theme.spacing(15),
                backgroundImage: `url(${item.picture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                mb: 3,
              }}
            ></Box>
          </Slide>
        ));
      case "build":
        return buildContent.map((item) => (
          <Slide key={nanoid()} in direction="left" timeout={item.timeout}>
            <Box
              sx={{
                width: item.width,
                height: (theme) => theme.spacing(15),
                backgroundImage: `url(${item.picture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                mb: 3,
              }}
            ></Box>
          </Slide>
        ));
      case "fix":
        return fixContent.map((item) => (
          <Slide key={nanoid()} in direction="left" timeout={item.timeout}>
            <Box
              sx={{
                width: item.width,
                height: (theme) => theme.spacing(15),
                backgroundImage: `url(${item.picture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                mb: 3,
              }}
            ></Box>
          </Slide>
        ));
      default:
        return null;
    }
  };
  return (
    <Box
      sx={{
        height: "100%",
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mr: 4,
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        sx={{ width: "100%", overflow: "hidden", zIndex: 30 }}
      >
        {getSlides()}
      </Box>
    </Box>
  );
};

export default Content;
