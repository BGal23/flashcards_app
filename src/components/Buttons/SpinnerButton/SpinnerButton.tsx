import { ISpinnerButtonProps } from "../../../types/props";
import useStyles from "./styles";

const SpinnerButton: React.FC<ISpinnerButtonProps> = ({ restartWord }) => {
  const classes = useStyles();

  return (
    <button
      type="button"
      className={classes.container}
      onClick={() => restartWord()}
    ></button>
  );
};

export default SpinnerButton;
