import { useState } from "react";
import { IFileElement } from "../../../types/props";
import FileInput from "../../Inputs/FileInput/FileInput";
import useStyles from "./styles";
import color from "../../../assets/colors";
import { FaFileImport } from "react-icons/fa";
import excelImport from "../../../utils/excelImport";
import { useIndexedDB } from "react-indexed-db-hook";
import PopUp from "../../PopUp/PopUp";

const FileElement: React.FC<IFileElement> = ({
  type,
  formats,
  template,
  icon,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const [alertColor, setAlertColor] = useState<string>(color.background);
  const [alertText, setAlertText] = useState<string>("");
  const classes = useStyles();
  const { add } = useIndexedDB("data");

  const handleImport = async () => {
    if (file) {
      try {
        const newFileData = await excelImport(file);
        if (newFileData.length === 0) {
          setAlertColor(color.error);
          setAlertText(`Missing appropriate items`);
        } else {
          newFileData.map((element) => add(element));
          setAlertColor(color.headerButton);
          setAlertText(`You have added ${newFileData.length} items`);
        }
      } catch (error) {
        setAlertColor(color.error);
        setAlertText(`Could not add items`);
        console.error("Error importing Excel file:", error);
      }
      setFile(null);
      setIsOpenPopUp(true);
    }
  };

  return (
    <div className={classes.container}>
      <h4 className={classes.title}>{`Import from ${type}`}</h4>
      <p className={classes.text}>
        {`To add elements to your database, select your ${type.toLocaleLowerCase()} file in the selected formats: `}
        <i>{formats.map((element) => `(.${element})`).join(", ")}</i>. Remember
        that the file must be consistent with the{" "}
        <a download style={{ color: color.link }} href={template}>
          template
        </a>
        .
      </p>

      <FileInput
        file={file}
        setFile={setFile}
        icon={icon}
        type={type}
        formats={formats}
      />
      <div className={classes.buttonWrapper}>
        <button
          style={{ opacity: file ? 1 : 0.5 }}
          className={classes.button}
          onClick={handleImport}
          disabled={file ? false : true}
          type="button"
        >
          <span>Import file</span>
          <FaFileImport size="1.4em" />
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

export default FileElement;
