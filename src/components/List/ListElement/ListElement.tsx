import { IListElementProps } from "../../../types/props";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import useStyles from "./styles";
import { Checkbox } from "@mui/material";
import {
  changeItemFromLocalStorageById,
  // removeItemFromLocalStorageById,
} from "../../../utils/localStorage";
import { useState } from "react";
import scaleItemColor from "../../../utils/scaleItemColor";
import DeleteButton from "../../Buttons/DeleteButton/DeleteButton";

const ListElement: React.FC<IListElementProps> = ({
  element: { id, original, learning, isActive, scale },
}) => {
  const [isDelete, setIsDelete] = useState(false);
  const [isActiveState, setIsActiveState] = useState<boolean>(isActive);
  const [isShown, setIsShown] = useState<boolean>(false);

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
      }}
    >
      <div className={classes.wordsWrapper}>
        <span>{original}</span>
        <span>{learning}</span>
      </div>
      <div className={classes.buttonsWrapper}>
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
        <button type="button" className={classes.button}>
          <FaEdit size={"1.5em"} color={"black"} />
        </button>
        <DeleteButton isShown={isShown} setIsShown={setIsShown} />
        <button
          type="button"
          className={classes.button}
          onClick={() => {
            setIsDelete(false);
            setIsShown(!isShown);
            // removeItemFromLocalStorageById("data", id);
          }}
        >
          <MdDelete size={"2em"} color={"black"} />
        </button>
      </div>
    </div>
  );
};

export default ListElement;
