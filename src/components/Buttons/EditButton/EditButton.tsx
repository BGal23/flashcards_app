import useStyles from "./styles";
import { IEditButtonProps } from "../../../types/props";
import { IoIosCloseCircle } from "react-icons/io";
import color from "../../../assets/colors";
import { FaEdit } from "react-icons/fa";
import updateElement from "../../../utils/updateElement";

const EditButton: React.FC<IEditButtonProps> = ({
  setIsEdited,
  isShownDelete,
  isEdited,
  isWordsValidated,
  originalWord,
  learningWord,
  descriptionText,
  element: { id, original, learning, description },
}) => {
  const classes = useStyles();

  const editElement = (isEdit: boolean, isValidate: boolean) => {
    if (
      isEdit &&
      isValidate &&
      (original !== originalWord ||
        learning !== learningWord ||
        description !== descriptionText)
    ) {
      const editedElement = { originalWord, learningWord, descriptionText };
      updateElement(id, editedElement);
      setIsEdited(false);
    } else {
      setIsEdited(true);
    }
  };

  return (
    <div
      className={classes.container}
      style={{
        transform: isEdited ? "translateX(44px)" : "translateX(0)",
        zIndex: !isShownDelete ? 2 : 0,
      }}
    >
      <button
        type="button"
        className={classes.button}
        style={{
          backgroundColor: isEdited ? color.activateButton : color.fontGrey,
        }}
        onClick={() => {
          setIsEdited(false);
        }}
      >
        <IoIosCloseCircle
          size={"2em"}
          color={isEdited ? color.fontWhite : "black"}
        />
      </button>
      <button
        type="button"
        className={classes.button}
        style={{
          backgroundColor: isEdited
            ? isWordsValidated
              ? color.activateButton
              : color.error
            : color.fontGrey,
        }}
        onClick={() => editElement(isEdited, isWordsValidated)}
      >
        <FaEdit size={"1.5em"} color={isEdited ? color.fontWhite : "black"} />
      </button>
    </div>
  );
};

export default EditButton;
