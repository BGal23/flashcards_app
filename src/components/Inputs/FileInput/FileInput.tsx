import useStyles from "./styles";
import { IFileInputProps } from "../../../types/props";
import { useEffect, useState } from "react";
import color from "../../../assets/colors";

const FileInput: React.FC<IFileInputProps> = ({
  file,
  setFile,
  icon,
  type,
  formats,
}) => {
  const [fileName, setFileName] = useState<string>("");
  const classes = useStyles();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentFile = event.target.files?.[0];
    if (currentFile) {
      setFile(currentFile);
      setFileName(currentFile.name);
    }
  };

  useEffect(() => {
    setFileName(`Choose an ${type.toLocaleLowerCase()} file...`);
  }, [type]);

  return (
    <div className={classes.inputWrapper}>
      <input
        id="file-input"
        type="file"
        onChange={handleFileChange}
        accept={formats.map((element) => `.${element}`).join(",")}
      />
      <label className={classes.label} htmlFor="file-input">
        <div className={classes.icon}>{icon}</div>
        <span
          style={{
            color: file ? color.fontBlack : "grey",
          }}
        >
          {fileName}
        </span>
      </label>
    </div>
  );
};

export default FileInput;
