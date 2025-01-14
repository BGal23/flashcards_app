import useStyles from "./styles";
import { ICheckInputProps } from "../../../types/props";

const CheckInput: React.FC<ICheckInputProps> = ({
  checkedWord,
  setCheckedWord,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.inputWrapper}>
      <input
        type="text"
        className={classes.input}
        value={checkedWord}
        onChange={(event) => setCheckedWord(event.target.value)}
        autoCorrect="off"
        spellCheck="false"
        autoComplete="off"
      />
    </div>
  );
};

export default CheckInput;
