import { FC, useRef } from "react";
import { Box, useTheme, Button as MuiButton, Slide } from "@mui/material";

interface ButtonProps {
  label: string;
  onClick: () => void;
  selected?: boolean;
}

const Button: FC<ButtonProps> = ({ label, onClick, selected }) => {
  const theme = useTheme();
  const containerRef = useRef(null);

  return (
    <Box ref={containerRef} sx={{ overflow: "hidden", width: "fit-content" }}>
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
      <MuiButton
        sx={{
          borderRadius: "0 0 6px 6px",
          color: theme.palette.secondary.main,
          fontWeight: 300,
        }}
        onClick={onClick}
      >
        {label.toUpperCase()}
      </MuiButton>
    </Box>
  );
};

export default Button;
