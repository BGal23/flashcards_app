import { IHeaderButtonProps } from "../../../types/props";
import useStyles from "./styles";

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
      style={{ background: mainView === activate ? " #faa918" : "#7ac70c" }}
    >
      {icon}
    </button>
  );
};

export default HeaderButton;
