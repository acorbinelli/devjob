import { FC } from "react";
import { Box, Button } from "@mui/material";
import { NavigateFunction } from "react-router-dom";

interface NavbarItemProps {
  label: string;
  onClick: () => void;
  selected: boolean;
}

const NavbarItem: FC<NavbarItemProps> = ({ label, onClick, selected }) => {
  return (
    <Box sx={{ position: "relative" }}>
      {selected && (
        <Box
          sx={{
            width: "100%",
            height: 10,
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            position: "absolute",
            background: "white",
            borderRadius: 1,
            filter: "blur(30px)",
            opacity: 0.6,
            zIndex: 10,
          }}
        />
      )}
      <Button variant="text" size="small" onClick={onClick} sx={{ height: (theme) => theme.spacing(5), zIndex: 20 }}>
        {label}
      </Button>
    </Box>
  );
};

export default NavbarItem;
