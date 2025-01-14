import { useEffect } from "react";
import useStyles from "./styles";
import { Checkbox } from "@mui/material";
import { getFromLocalStorage } from "../../../utils/localStorage";
import color from "../../../assets/colors";
import { ISettingElementProps } from "../../../types/props";

const SettingElement: React.FC<ISettingElementProps> = ({
  title,
  memoryKey,
  isTurnOn,
  setIsTurnOn,
}) => {
  const classes = useStyles();

  useEffect(() => {
    const currentMode: boolean | null = getFromLocalStorage(memoryKey);
    if (typeof currentMode === "boolean") {
      setIsTurnOn(currentMode);
    }
    if (isTurnOn) {
      document.body.classList.add(memoryKey);
    } else {
      document.body.classList.remove(memoryKey);
    }
  }, [isTurnOn, memoryKey, setIsTurnOn]);

  const handleClick = () => {
    console.log(memoryKey);

    document.body.classList.remove(memoryKey);
    localStorage.setItem(memoryKey, JSON.stringify(!isTurnOn));
    setIsTurnOn(!isTurnOn);
  };

  return (
    <div className={classes.box}>
      <h4>{title}</h4>
      <Checkbox
        id="checkbox"
        onChange={handleClick}
        checked={isTurnOn}
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: "2em",
            color: color.fontBlack,
            margin: -1.3,
          },
        }}
      />
    </div>
  );
};

export default SettingElement;
