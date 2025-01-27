import { IAddButtonProps } from "../../../types/props";
import { FaPlusCircle } from "react-icons/fa";
import useStyles from "./styles";
import { useState } from "react";
import color from "../../../assets/colors";
import { useIndexedDB } from "react-indexed-db-hook";
import PopUp from "../../PopUp/PopUp";

const AddButton: React.FC<IAddButtonProps> = ({
  activate,
  dataObject,
  clearData,
  isValidated,
  disabled,
}) => {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const [alertColor, setAlertColor] = useState<string>(color.background);
  const [alertText, setAlertText] = useState<string>("");
  const classes = useStyles();
  const { add } = useIndexedDB("data");

  const sendData = async () => {
    setIsOpenPopUp(true);
    if (isValidated) {
      try {
        await add(dataObject);
        setAlertColor(color.headerButton);
        clearData(true);
        setAlertText("You added a new word");
      } catch (error) {
        console.error("error", error);
        setAlertColor(color.activateButton);
        setAlertText("This word exist in your list");
      }
    } else {
      setAlertColor(color.error);
      setAlertText("Fill in the required fields");
      activate(true);
    }
  };

  return (
    <>
      <div className={classes.buttonWrapper}>
        <button
          disabled={disabled}
          style={{
            opacity: disabled ? 0.5 : 1,
          }}
          type="button"
          className={classes.button}
          onClick={() => sendData()}
        >
          Add word <FaPlusCircle size={"2em"} color={color.fontBlack} />
        </button>
      </div>
      <PopUp
        color={alertColor}
        text={alertText}
        time={3000}
        isOpen={isOpenPopUp}
        setIsOpen={setIsOpenPopUp}
      />
    </>
  );
};

export default AddButton;
