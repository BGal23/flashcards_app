import { IListElementProps } from "../../../types/props";
import useStyles from "./styles";
import { Checkbox } from "@mui/material";
import { changeItemFromLocalStorageById } from "../../../utils/localStorage";
import { useState } from "react";
import scaleItemColor from "../../../utils/scaleItemColor";
import DeleteButton from "../../Buttons/DeleteButton/DeleteButton";
import EditElement from "../EditElement/EditElement";
import EditButton from "../../Buttons/EditButton/EditButton";

const ListElement: React.FC<IListElementProps> = ({ element }) => {
  const { id, isActive, scale, original, learning, description } = element;
  const [isDelete, setIsDelete] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [isActiveState, setIsActiveState] = useState<boolean>(isActive);
  const [isShownDelete, setIsShownDelete] = useState<boolean>(false);
  const [isWordsValidated, setIsWordsValidated] = useState<boolean>(false);
  const [originalWord, setOriginalWord] = useState<string>(original);
  const [learningWord, setLearningWord] = useState<string>(learning);
  const [descriptionText, setDescriptionText] = useState<string | undefined>(
    description
  );

  const label = {
    id: "checkbox",
    checked: isActiveState,
    onChange: () => {
      changeItemFromLocalStorageById("data", id);
      setIsActiveState(!isActiveState);
    },
  };

  const classes = useStyles();
  return (
    <div
      className={classes.container}
      style={{
        display: isDelete ? "none" : "flex",
        background: scaleItemColor(scale),
        height: isEdited ? "7em" : "3em",
      }}
    >
      <EditElement
        element={element}
        isEdited={isEdited}
        isWordsValidated={isWordsValidated}
        setIsWordsValidated={setIsWordsValidated}
        originalWord={originalWord}
        learningWord={learningWord}
        descriptionText={descriptionText}
        setOriginalWord={setOriginalWord}
        setLearningWord={setLearningWord}
        setDescriptionText={setDescriptionText}
      />
      <div className={classes.buttonsWrapper}>
        {!isEdited && (
          <Checkbox
            {...label}
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: "2em",
                color: "black",
                margin: -1.3,
              },
            }}
          />
        )}
        <div className={classes.buttonsBox}>
          <EditButton
            originalWord={originalWord}
            learningWord={learningWord}
            descriptionText={descriptionText}
            isEdited={isEdited}
            isShownDelete={isShownDelete}
            setIsEdited={setIsEdited}
            isWordsValidated={isWordsValidated}
            element={element}
          />
          <DeleteButton
            isShownDelete={isShownDelete}
            setIsShownDelete={setIsShownDelete}
            setIsDelete={setIsDelete}
            id={id}
          />
        </div>
      </div>
    </div>
  );
};

export default ListElement;
