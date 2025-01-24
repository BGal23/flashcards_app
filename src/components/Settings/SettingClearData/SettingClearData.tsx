import useStyles from "./styles";
import { ISettingClearDataProps } from "../../../types/props";
import { MdDelete } from "react-icons/md";
import color from "../../../assets/colors";
import { useIndexedDB } from "react-indexed-db-hook";
import checkTotal from "../../../db/checkTotal";
import { useState } from "react";
import PopUp from "../../PopUp/PopUp";
import { IoIosCloseCircle } from "react-icons/io";

const SettingClearData: React.FC<ISettingClearDataProps> = ({
  title,
  // memoryKey,
}) => {
  const [isShownDelete, setIsShownDelete] = useState(false);
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const [alertColor, setAlertColor] = useState<string>(color.background);
  const [alertText, setAlertText] = useState<string>("");
  const classes = useStyles();
  const { clear } = useIndexedDB("data");

  const handleClear = async () => {
    if (!isShownDelete) {
      setIsShownDelete(true);
    } else {
      try {
        if (await checkTotal("MyDB", "data")) {
          clear();
          setAlertColor(color.activateButton);
          setAlertText("All data was clear");
        } else {
          setAlertColor(color.error);
          setAlertText("Data is empty");
          throw new Error("Data is empty!");
        }
      } catch (error) {
        console.error(error);
      }
      setIsOpenPopUp(true);
      setIsShownDelete(false);
    }
  };

  return (
    <div className={classes.box}>
      <h4 className={classes.title}>{title}</h4>
      <div className={classes.buttonWrapper}>
        <button
          className={classes.button}
          style={{
            zIndex: isShownDelete ? 1 : -1,
            position: "relative",
            transform: isShownDelete
              ? "translateX(-0.5em)"
              : "translateX(2.5em)",
            transition: "transform 500ms ease",
          }}
          type="button"
          onClick={() => setIsShownDelete(false)}
        >
          <IoIosCloseCircle size={"2.3em"} color={color.background} />
        </button>
        <button
          className={classes.button}
          style={{
            background: isShownDelete ? color.error : color.fontBlack,
          }}
          type="button"
          onClick={handleClear}
        >
          <MdDelete
            size={"2.3em"}
            color={isShownDelete ? color.fontBlack : color.background}
          />
        </button>
      </div>
      <PopUp
        color={alertColor}
        text={alertText}
        time={3000}
        isOpen={isOpenPopUp}
        setIsOpen={setIsOpenPopUp}
      />
    </div>
  );
};

export default SettingClearData;
