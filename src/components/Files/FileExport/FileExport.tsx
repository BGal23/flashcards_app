import { useEffect, useState } from "react";
import useStyles from "./styles";
import color from "../../../assets/colors";
import { FaFileExport } from "react-icons/fa";
import { useIndexedDB } from "react-indexed-db-hook";
import PopUp from "../../PopUp/PopUp";
import excelExport from "../../../utils/excelExport";
import { saveAs } from "file-saver";
import checkTotal from "../../../db/checkTotal";

const FileExport = () => {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const [alertColor, setAlertColor] = useState<string>(color.background);
  const [alertText, setAlertText] = useState<string>("");
  const [isArrayEmpty, setIsArrayEmpty] = useState<boolean>(false);
  const classes = useStyles();
  const { getAll } = useIndexedDB("data");

  const handleExport = async () => {
    try {
      const allElementsArray = await getAll();
      const newExcelFile = excelExport(allElementsArray);
      saveAs(newExcelFile, "flashcards_app.xlsx");
      setAlertColor(color.headerButton);
      setAlertText(`File ready for download`);
    } catch (error) {
      setAlertColor(color.error);
      setAlertText(`Could not download items`);
      console.error(`Error exporting Excel file:", ${error}`);
    }

    setIsOpenPopUp(true);
  };

  useEffect(() => {
    (async () => {
      try {
        setIsArrayEmpty(!(await checkTotal("MyDB", "data")));
      } catch (error) {
        console.error("Error checking store data:", error);
      }
    })();
  }, []);

  return (
    <div className={classes.container}>
      <h4 className={classes.title}>{`Export to Excel`}</h4>
      <p className={classes.text}>
        All your current items saved in the app can be exported to a file
        (.xlsx) for later work with or backup. You can download copies by
        pressing the button below.
      </p>
      <div className={classes.buttonWrapper}>
        <button
          style={{ opacity: !isArrayEmpty ? 1 : 0.5 }}
          className={classes.button}
          disabled={isArrayEmpty}
          onClick={handleExport}
          type="button"
        >
          <span>Export file</span>
          <FaFileExport size="1.4em" />
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

export default FileExport;
