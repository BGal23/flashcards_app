import useStyles from "./styles";
import { Checkbox } from "@mui/material";
import color from "../../../assets/colors";
import { ISettingBooleanElementProps } from "../../../types/props";

const SettingBooleanElement: React.FC<ISettingBooleanElementProps> = ({
  title,
  memoryKey,
  isTurnOn,
  setIsTurnOn,
}) => {
  const classes = useStyles();

  const handleChange = () => {
    localStorage.setItem(memoryKey, JSON.stringify(!isTurnOn));
    setIsTurnOn(!isTurnOn);
  };

  return (
    <div className={classes.box}>
      <h4 className={classes.title}>{title}</h4>
      <Checkbox
        id={memoryKey}
        onChange={handleChange}
        checked={Boolean(isTurnOn)}
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

export default SettingBooleanElement;
