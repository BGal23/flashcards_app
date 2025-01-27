import { IListElementProps } from "../../../types/props";
import useStyles from "./styles";
import { Checkbox } from "@mui/material";
import { useRef, useState } from "react";
import scaleItemColor from "../../../utils/scaleItemColor";
import DeleteButton from "../../Buttons/DeleteButton/DeleteButton";
import EditElement from "../EditElement/EditElement";
import EditButton from "../../Buttons/EditButton/EditButton";
import { IUpdateObject } from "../../../types/data";
import { useIndexedDB } from "react-indexed-db-hook";

const ListElement: React.FC<IListElementProps> = ({
  element,
  setIsOpenPopUp,
  setAlertColor,
  setAlertText,
}) => {
  const [isDelete, setIsDelete] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [isActiveState, setIsActiveState] = useState<boolean>(element.isActive);
  const [isShownDelete, setIsShownDelete] = useState<boolean>(false);
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const [original, setOriginal] = useState<string>(element.original);
  const [learning, setLearning] = useState<string>(element.learning);
  const [category, setCategory] = useState<string>(element.category);
  const [description, setDescription] = useState<string | undefined>(
    element.description
  );
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { update } = useIndexedDB("data");

  const updateData = async (newElement: IUpdateObject) => {
    setOriginal(newElement.original);
    setLearning(newElement.learning);
    setDescription(newElement.description);
  };

  const label = {
    id: String(element.id),
    checked: isActiveState,
    onChange: () => {
      update({ ...element, isActive: !isActiveState });
      setIsActiveState(!isActiveState);
    },
  };

  const classes = useStyles();
  return (
    <div
      ref={containerRef}
      className={classes.container}
      style={{
        display: isDelete ? "none" : "flex",
        background: scaleItemColor(element.scale),
        height: isEdited ? "9em" : "3em",
      }}
    >
      <EditElement
        isEdited={isEdited}
        isValidated={isValidated}
        setIsValidated={setIsValidated}
        original={original}
        learning={learning}
        category={category}
        description={description}
        id={element.id}
        setOriginal={setOriginal}
        setLearning={setLearning}
        setCategory={setCategory}
        setDescription={setDescription}
        isActive={isActiveState}
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
            original={original}
            learning={learning}
            category={category}
            description={description}
            isEdited={isEdited}
            isShownDelete={isShownDelete}
            setIsEdited={setIsEdited}
            isValidated={isValidated}
            element={element}
            updateData={updateData}
            ref={containerRef}
            setIsOpenPopUp={setIsOpenPopUp}
            setAlertColor={setAlertColor}
            setAlertText={setAlertText}
          />
          <DeleteButton
            isShownDelete={isShownDelete}
            setIsShownDelete={setIsShownDelete}
            setIsDelete={setIsDelete}
            id={element.id}
            setIsOpenPopUp={setIsOpenPopUp}
            setAlertColor={setAlertColor}
            setAlertText={setAlertText}
          />
        </div>
      </div>
    </div>
  );
};

export default ListElement;
