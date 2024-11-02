import { IAddButtonProps } from "../../../types/props";
import { FaPlusCircle } from "react-icons/fa";
import useStyles from "./styles";
import { addToMemory } from "../../../utils/localStorage";
import { useState } from "react";

const AddButton: React.FC<IAddButtonProps> = ({
  activate,
  dataObject,
  clearData,
  isWordsValidated,
}) => {
  const [result, setResult] = useState<JSX.Element>();
  const classes = useStyles();

  const sendData = () => {
    if (isWordsValidated) {
      if (!addToMemory(dataObject)) {
        setResult(
          <div className={classes.error}>This word exist in your list</div>
        );
      } else {
        clearData(true);
        setResult(<div className={classes.susses}>Done!</div>);
      }
    } else {
      setResult(
        <div className={classes.error}>Fill in the required fields</div>
      );
      activate(true);
    }
  };

  return (
    <div className={classes.buttonWrapper}>
      {result}
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
