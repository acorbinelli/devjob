import { FC, useRef } from "react";
import { Box, Button, useTheme, Slide, useMediaQuery } from "@mui/material";

interface LinkItemProps {
  label: string;
  onClick: (event: any) => void;
  selected: boolean;
}

const LinkItem: FC<LinkItemProps> = ({ label, onClick, selected }) => {
  const theme = useTheme();
  const containerRef = useRef(null);
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box ref={containerRef} sx={{ overflow: "hidden" }}>
      <Button
        variant="text"
        color="secondary"
        sx={{
          textTransform: "capitalize",
          fontSize: 40,
          [theme.breakpoints.down("lg")]: {
            fontSize: 25,
          },
          [theme.breakpoints.down("md")]: {
            fontSize: 40,
          },
          [theme.breakpoints.down("sm")]: { fontSize: 25 },

          fontWeight: 300,
        }}
        onClick={onClick}
      >
        {label}
      </Button>
      <Slide
        container={containerRef.current}
        in={selected}
        timeout={800}
        easing={{ enter: "cubic-bezier(1,-0.21,0,1.24)" }}
        direction="left"
      >
        <Box
          sx={{
            width: "100%",
            height: "1px",
            background: (theme) => theme.palette.secondary.light,
          }}
        />
      </Slide>
    </Box>
  );
};

export default LinkItem;
