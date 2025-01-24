import { FaMinus, FaPlus } from "react-icons/fa";
import { ISettingTimeElementProps } from "../../../types/props";
import useStyles from "./styles";
import { useState } from "react";

const UPPER = 15000;
const LOWER = 1000;

const SettingTimeElement: React.FC<ISettingTimeElementProps> = ({
  title,
  memoryKey,
  timeNextWord,
  setTimeNextWord,
}) => {
  const [isPlusBtn, setIsPlusBtn] = useState<boolean>(false);
  const [isMinusBtn, setIsMinusBtn] = useState<boolean>(false);
  const classes = useStyles();

  const handleChange = (time: number) => {
    if (time <= LOWER) {
      setIsMinusBtn(true);
    } else if (time >= UPPER) {
      setIsPlusBtn(true);
    } else {
      setIsPlusBtn(false);
      setIsMinusBtn(false);
    }
    localStorage.setItem(memoryKey, JSON.stringify(time));
    setTimeNextWord(Number(time));
  };

  return (
    <div className={classes.box}>
      <h4 className={classes.title}>{title}</h4>
      <div className={classes.buttonsWrapper}>
        <button
          className={classes.button}
          type="button"
          onClick={() => handleChange(Number(timeNextWord + 1000))}
          disabled={isPlusBtn || timeNextWord >= UPPER}
          style={{ opacity: isPlusBtn || timeNextWord >= UPPER ? 0.5 : 1 }}
        >
          <FaPlus />
        </button>
        <span>{timeNextWord / 1000}s</span>
        <button
          className={classes.button}
          type="button"
          onClick={() => handleChange(Number(timeNextWord - 1000))}
          disabled={isMinusBtn || timeNextWord <= LOWER}
          style={{ opacity: isMinusBtn || timeNextWord <= LOWER ? 0.5 : 1 }}
        >
          <FaMinus />
        </button>
      </div>
    </div>
  );
};

export default SettingTimeElement;
