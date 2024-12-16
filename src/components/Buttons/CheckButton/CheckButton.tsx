import useStyles from "./styles";
import { ICheckButtonProps } from "../../../types/props";

const CheckButton: React.FC<ICheckButtonProps> = ({
  wordCheck,
  isDisabled,
  color,
  title,
}) => {
  const classes = useStyles();

  return (
    <button
      type="button"
      disabled={isDisabled}
      style={{ opacity: isDisabled ? 0.6 : 1, background: color }}
      className={classes.button}
      onClick={wordCheck}
    >
      {title}
    </button>
  );
};

export default CheckButton;
