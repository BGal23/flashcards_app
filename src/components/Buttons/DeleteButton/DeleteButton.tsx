import useStyles from "./styles";
import { IDeleteButtonProps } from "../../../types/props";
import { MdDelete } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import color from "../../../assets/colors";
import { removeItemFromLocalStorageById } from "../../../utils/localStorage";

const DeleteButton: React.FC<IDeleteButtonProps> = ({
  setIsShownDelete,
  setIsDelete,
  isShownDelete,
  id,
}) => {
  const classes = useStyles();

  return (
    <div
      className={classes.container}
      style={{
        transform: isShownDelete ? "translateX(-44px)" : "translateX(0)",
        // zIndex: !isEdited ? 2 : 0,
      }}
    >
      <button
        type="button"
        className={classes.button}
        style={{
          backgroundColor: isShownDelete ? color.error : color.fontGrey,
        }}
        onClick={() => {
          setIsDelete(isShownDelete);
          setIsShownDelete(true);

          if (isShownDelete) removeItemFromLocalStorageById("data", id);
        }}
      >
        <MdDelete
          size={"2em"}
          color={isShownDelete ? color.fontWhite : "black"}
        />
      </button>
      <button
        type="button"
        className={classes.button}
        style={{
          backgroundColor: isShownDelete ? color.error : color.fontGrey,
        }}
        onClick={() => {
          setIsShownDelete(false);
        }}
      >
        <IoIosCloseCircle
          size={"2em"}
          color={isShownDelete ? color.fontWhite : "black"}
        />
      </button>
    </div>
  );
};

export default DeleteButton;
