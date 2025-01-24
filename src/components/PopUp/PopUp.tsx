import useStyles from "./styles";
import { IPopUpProps } from "../../types/props";
import { useEffect } from "react";

const PopUp: React.FC<IPopUpProps> = ({
  color,
  text,
  time,
  isOpen,
  setIsOpen,
}) => {
  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        setIsOpen(false);
      }, time);

      return () => clearTimeout(timeout);
    }
  }, [isOpen, time, setIsOpen]);

  const classes = useStyles();
  return (
    <div
      className={classes.container}
      style={{
        background: color,
        transform: isOpen ? "translateY(-3.2em)" : "translateY(0)",
      }}
    >
      <span className={classes.text}>{text}</span>
    </div>
  );
};

export default PopUp;
