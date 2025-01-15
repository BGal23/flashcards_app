import { FaMinus, FaPlus } from "react-icons/fa";
import { ISettingTimeElementProps } from "../../../types/props";
import useStyles from "./styles";

const SettingTimeElement: React.FC<ISettingTimeElementProps> = ({
  title,
  memoryKey,
  timeNextWord,
  setTimeNextWord,
}) => {
  const classes = useStyles();

  const handleChange = (time: number) => {
    if (time > 0 && time < 16000) {
      localStorage.setItem(memoryKey, JSON.stringify(time));
      setTimeNextWord(Number(time));
    }
  };

  return (
    <div className={classes.box}>
      <h4>{title}</h4>
      <div className={classes.buttonsWrapper}>
        <button
          className={classes.button}
          type="button"
          onClick={() => handleChange(Number(timeNextWord + 1000))}
        >
          <FaPlus />
        </button>
        <span>{timeNextWord / 1000}s</span>
        <button
          className={classes.button}
          type="button"
          onClick={() => handleChange(Number(timeNextWord - 1000))}
        >
          <FaMinus />
        </button>
      </div>
    </div>
  );
};

export default SettingTimeElement;
