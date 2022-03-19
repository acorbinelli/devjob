import { useEffect, useState, FC } from "react";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

const RotatingGear: FC<{ selected: string; position: { left?: number; bottom: number; right?: number } }> = ({
  selected,
  position,
}) => {
  const [changed, setChanged] = useState<boolean>(false);

  useEffect(() => {
    setChanged((prev) => !prev);
  }, [selected]);
  return (
    <SettingsRoundedIcon
      sx={{
        position: "absolute",
        left: position.left,
        right: position.right,
        bottom: position.bottom,
        color: (theme) => theme.palette.secondary.main,
        transform: changed
          ? position.left
            ? "rotate(190deg)"
            : "rotate(-190deg)"
          : position.right
          ? "rotate(190deg)"
          : "rotate(-190deg)",
        transition: "transform 1s ",
      }}
      fontSize="small"
    />
  );
};

export default RotatingGear;
