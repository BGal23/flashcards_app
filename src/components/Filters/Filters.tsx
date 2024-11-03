import { IFiltersProps } from "../../types/props";
import FilterButton from "../Buttons/FilterButton/FilterButton";
import {
  FaSortAlphaDown,
  FaSortAlphaDownAlt,
  FaSortAmountDown,
  FaSortAmountDownAlt,
} from "react-icons/fa";
import useStyles from "./styles";

const Filters: React.FC<IFiltersProps> = ({ usedFilter, setUsedFilter }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <FilterButton
        usedFilter={usedFilter}
        setUsedFilter={setUsedFilter}
        activate={"a>z"}
        icon={<FaSortAlphaDown size={"2.5em"} color="black" />}
      />
      <FilterButton
        usedFilter={usedFilter}
        setUsedFilter={setUsedFilter}
        activate={"z>a"}
        icon={<FaSortAlphaDownAlt size={"2.5em"} color="black" />}
      />
      <FilterButton
        usedFilter={usedFilter}
        setUsedFilter={setUsedFilter}
        activate={"+>-"}
        icon={<FaSortAmountDown size={"2.5em"} color="black" />}
      />
      <FilterButton
        usedFilter={usedFilter}
        setUsedFilter={setUsedFilter}
        activate={"->+"}
        icon={<FaSortAmountDownAlt size={"2.5em"} color="black" />}
      />
    </div>
  );
};

export default Filters;