import { IAddButtonProps } from "../../../types/props";
import { FaPlusCircle } from "react-icons/fa";
import useStyles from "./styles";
import { addToMemory } from "../../../utils/localStorage";
import { useRef, useState } from "react";
import color from "../../../assets/colors";

const AddButton: React.FC<IAddButtonProps> = ({
  activate,
  dataObject,
  clearData,
  isWordsValidated,
}) => {
  const [result, setResult] = useState<string>();
  const [isShowInfo, setIsShowInfo] = useState<boolean>(false);
  const [errorColor, setErrorColor] = useState<boolean>(true);
  const classes = useStyles();
  const timerID = useRef<number | null>(null);

  const sendData = () => {
    setIsShowInfo(true);
    if (isWordsValidated) {
      if (!addToMemory(dataObject)) {
        setErrorColor(true);
        setResult("This word exist in your list");
      } else {
        setErrorColor(false);
        clearData(true);
        setResult("You added a new word");
      }
    } else {
      setErrorColor(true);
      setResult("Fill in the required fields");
      activate(true);
    }

    if (timerID.current !== null) clearTimeout(timerID.current);
    timerID.current = setTimeout(() => {
      setIsShowInfo(false);
    }, 3000);
  };

  return (
    <div className={classes.buttonWrapper}>
      <div
        className={classes.error}
        style={{
          display: isShowInfo ? "block" : "none",
          background: errorColor ? color.error : color.headerButton,
        }}
      >
        {result}
      </div>
      <button
        type="button"
        className={classes.button}
        onClick={() => sendData()}
      >
        Add word <FaPlusCircle size={"2em"} color="black" />
      </button>
    </div>
  );
};

export default AddButton;
