import { IHeaderButtonProps } from "../../../types/props";
import useStyles from "./styles";
import color from "../../../assets/colors";

const HeaderButton: React.FC<IHeaderButtonProps> = ({
  setMainView,
  mainView,
  activate,
  icon,
}) => {
  const classes = useStyles();

  return (
    <button
      className={classes.container}
      onClick={() => setMainView(activate)}
      style={{
        background:
          mainView === activate ? color.activateButton : color.headerButton,
      }}
    >
      {icon}
    </button>
  );
};

export default HeaderButton;
