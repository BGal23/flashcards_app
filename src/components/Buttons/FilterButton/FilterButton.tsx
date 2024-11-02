import { IFilterButtonProps } from "../../../types/props";
import useStyles from "./styles";
import color from "../../../assets/colors";

const FilterButton: React.FC<IFilterButtonProps> = ({
  usedFilter,
  setUsedFilter,
  activate,
  icon,
}) => {
  const classes = useStyles();

  return (
    <button
      type="button"
      className={classes.container}
      onClick={() => setUsedFilter(activate)}
      style={{
        background:
          usedFilter === activate ? color.activateButton : color.headerButton,
      }}
    >
      {icon}
    </button>
  );
};

export default FilterButton;
