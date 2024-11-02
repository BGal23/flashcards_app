import { IAddInputProps } from "../../../types/props";
import useStyles from "./styles";

const AddInput: React.FC<IAddInputProps> = ({
  title,
  placeholder,
  isDescription,
  value,
  changeValue,
  error,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <span>{title}</span>
      {isDescription ? (
        <textarea
          className={classes.textarea}
          placeholder={placeholder}
          value={value}
          maxLength={90}
          onChange={(event) => changeValue(event.target.value)}
        />
      ) : (
        <input
          type="text"
          className={classes.input}
          placeholder={placeholder}
          maxLength={30}
          value={value}
          onChange={(event) => changeValue(event.target.value)}
        />
      )}
      <div className={classes.errorWrapper}>
        {error && <span className={classes.error}>{error}</span>}
      </div>
    </div>
  );
};

export default AddInput;
