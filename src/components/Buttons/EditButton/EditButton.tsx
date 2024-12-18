import { forwardRef } from "react";
import useStyles from "./styles";
import { IEditButtonProps } from "../../../types/props";
import { IoIosCloseCircle } from "react-icons/io";
import color from "../../../assets/colors";
import { FaEdit } from "react-icons/fa";
import updateElement from "../../../utils/updateElement";
import getElementById from "../../../utils/getElementById";

const EditButton = forwardRef<HTMLDivElement, IEditButtonProps>(
  (
    {
      setIsEdited,
      updateData,
      isShownDelete,
      isEdited,
      isWordsValidated,
      originalWord,
      learningWord,
      descriptionText,
      element: { id, original, learning, description },
    },
    ref
  ) => {
    const classes = useStyles();

    const handleOutClick = (event: MouseEvent) => {
      if (ref && "current" in ref && ref.current) {
        if (!ref.current.contains(event.target as Node)) {
          setIsEdited(false);
          updateData({
            originalWord: original,
            learningWord: learning,
            descriptionText: description,
          });
          document.removeEventListener("mousedown", handleOutClick);
        }
      }
    };

    const editElement = async (isEdit: boolean, isValidate: boolean) => {
      document.addEventListener("mousedown", handleOutClick);

      if (isEdit && isValidate) {
        const oldElement = await getElementById(id);

        if (!oldElement) {
          console.error("Element not found");
          return;
        }

        const {
          originalWord: oldOriginal,
          learningWord: oldLearning,
          descriptionText: oldDescription,
        } = oldElement;

        if (
          oldOriginal !== originalWord ||
          oldLearning !== learningWord ||
          oldDescription !== descriptionText
        ) {
          const editedElement = { originalWord, learningWord, descriptionText };
          updateElement(id, editedElement);
          updateData(editedElement);
          setIsEdited(false);
        }
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
            updateData({
              originalWord: original,
              learningWord: learning,
              descriptionText: description,
            });
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
  }
);

export default EditButton;
