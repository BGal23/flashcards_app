import useStyles from "./styles";
import { IDeleteButtonProps } from "../../../types/props";
import { MdDelete } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import color from "../../../assets/colors";
import { useRef } from "react";
import { useIndexedDB } from "react-indexed-db-hook";

const DeleteButton: React.FC<IDeleteButtonProps> = ({
  setIsShownDelete,
  setIsDelete,
  isShownDelete,
  id,
}) => {
  const classes = useStyles();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { deleteRecord } = useIndexedDB("data");

  const handleOutClick = (event: Event) => {
    if (buttonRef.current) {
      if (!buttonRef.current.contains(event.target as Node)) {
        setIsShownDelete(false);
        document.removeEventListener("mousedown", handleOutClick);
      }
    }
  };

  return (
    <div
      className={classes.container}
      style={{
        transform: isShownDelete ? "translateX(-44px)" : "translateX(0)",
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className={classes.button}
        style={{
          backgroundColor: isShownDelete ? color.error : color.fontGrey,
        }}
        onClick={() => {
          setIsDelete(isShownDelete);
          setIsShownDelete(true);
          document.addEventListener("mousedown", handleOutClick);

          if (isShownDelete && id) deleteRecord(id);
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
