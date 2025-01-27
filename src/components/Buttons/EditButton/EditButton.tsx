import { forwardRef, useEffect, useState } from "react";
import useStyles from "./styles";
import { IEditButtonProps } from "../../../types/props";
import { IoIosCloseCircle } from "react-icons/io";
import color from "../../../assets/colors";
import { FaEdit } from "react-icons/fa";
import { useIndexedDB } from "react-indexed-db-hook";
import { IObject } from "../../../types/data";

const EditButton = forwardRef<HTMLDivElement, IEditButtonProps>(
  (
    {
      setIsEdited,
      updateData,
      isShownDelete,
      isEdited,
      isValidated,
      original,
      learning,
      category,
      description,
      element,
      setIsOpenPopUp,
      setAlertColor,
      setAlertText,
    },
    ref
  ) => {
    const classes = useStyles();
    const { update, getByID } = useIndexedDB("data");
    const [currentElement, setCurrentElement] = useState<IObject>(element);

    useEffect(() => {
      (async () => {
        if (element.id) setCurrentElement(await getByID(element.id));
      })();
    }, [element.id, getByID]);

    const handleOutClick = (event: MouseEvent) => {
      if (ref && "current" in ref && ref.current) {
        if (!ref.current.contains(event.target as Node)) {
          setIsEdited(false);
          updateData(currentElement);
          document.removeEventListener("mousedown", handleOutClick);
        }
      }
    };

    const editElement = async (isEdit: boolean, isValidate: boolean) => {
      document.addEventListener("mousedown", handleOutClick);

      if (isEdit && isValidate) {
        if (
          currentElement.original !== original ||
          currentElement.learning !== learning ||
          currentElement.category !== category ||
          currentElement.description !== description
        ) {
          const editedElement = {
            original: original,
            learning: learning,
            category: category,
            description: description,
          };
          update({
            ...currentElement,
            ...editedElement,
          });
          updateData(editedElement);
          setIsEdited(false);
          setIsOpenPopUp(true);
          setAlertColor(color.headerButton);
          setAlertText("You edited the item");
        }
      } else {
        setIsEdited(true);
      }
    };

    return (
      <>
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
              updateData(currentElement);
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
                ? isValidated
                  ? color.activateButton
                  : color.error
                : color.fontGrey,
            }}
            onClick={() => editElement(isEdited, isValidated)}
          >
            <FaEdit
              size={"1.5em"}
              color={isEdited ? color.fontWhite : "black"}
            />
          </button>
        </div>
      </>
    );
  }
);

export default EditButton;
