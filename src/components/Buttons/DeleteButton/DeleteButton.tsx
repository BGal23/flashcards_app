import useStyles from "./styles";
import { IDeleteButtonProps } from "../../../types/props";

const DeleteButton: React.FC<IDeleteButtonProps> = ({
  // setIsShown,
  isShown,
}) => {
  const classes = useStyles();

  return (
    <div
      className={classes.container}
      style={{ transform: isShown ? "translateX(0)" : "translateX(100px)" }}
    >
      <button type="button">D</button>
      <button type="button">G</button>
    </div>
  );
};

export default DeleteButton;
