import { IAddInputProps } from "../../../types/props";
import useStyles from "./styles";

const AddInput: React.FC<IAddInputProps> = ({
  icon,
  placeholder,
  isDescription,
  value,
  changeValue,
  error,
  id,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {isDescription ? (
        <textarea
          id={id}
          className={classes.textarea}
          placeholder={placeholder}
          value={value}
          maxLength={90}
          onChange={(event) => changeValue(event.target.value)}
        />
      ) : (
        <span className={classes.inputWrapper}>
          {icon}
          <input
            id={id}
            type="text"
            className={classes.input}
            placeholder={placeholder}
            maxLength={30}
            value={value}
            onChange={(event) => changeValue(event.target.value)}
          />
        </span>
      )}
      {error && (
        <div className={classes.errorWrapper}>
          <span className={classes.error}>{error}</span>
        </div>
      )}
    </div>
  );
};

export default AddInput;
