import { IFiltersProps } from "../../types/props";
import FilterButton from "../Buttons/FilterButton/FilterButton";
import useStyles from "./styles";

const Filters: React.FC<IFiltersProps> = ({
  usedFilter,
  setUsedFilter,
  element,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {element.map((other) => (
        <FilterButton
          key={other.id}
          usedFilter={usedFilter}
          setUsedFilter={setUsedFilter}
          activate={other.activate}
          icon={other.icon}
        />
      ))}
    </div>
  );
};

export default Filters;
