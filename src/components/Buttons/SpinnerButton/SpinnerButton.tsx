import { useEffect, useState } from "react";
import { ISpinnerButtonProps } from "../../../types/props";
import useStyles from "./styles";

const SpinnerButton: React.FC<ISpinnerButtonProps> = ({
  correctWord,
  color,
  time,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setIsLoading(true);
  }, [color]);

  return (
    <div className={classes.container}>
      <div className={classes.loaderRing} style={{ background: color }}>
        <span
          className={classes.shadow}
          style={{
            transform: isLoading ? "translatex(100px)" : "translatex(0)",
            transition: `transform ${time}ms linear`,
          }}
        ></span>
        <button
          type="button"
          className={classes.button}
          onClick={() => correctWord()}
        >
          Next!
        </button>
      </div>
    </div>
  );
};

export default SpinnerButton;
