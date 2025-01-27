import { IAddTextareaProps } from "../../../types/props";
import useStyles from "./styles";

const AddTextarea: React.FC<IAddTextareaProps> = ({
  placeholder,
  value,
  changeValue,
  id,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <textarea
        id={id}
        className={classes.textarea}
        placeholder={placeholder}
        value={value}
        maxLength={90}
        onChange={(event) => changeValue(event.target.value)}
      />
    </div>
  );
};

export default AddTextarea;
