import { FaSearch } from "react-icons/fa";
import useStyles from "./styles";
import { ISearchInputProps } from "../../../types/props";
import color from "../../../assets/colors";

const SearchInput: React.FC<ISearchInputProps> = ({
  searchedWord,
  setSearchedWord,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.inputWrapper}>
      <input
        type="text"
        className={classes.input}
        value={searchedWord}
        onChange={(event) => setSearchedWord(event.target.value)}
      />
      <span className={classes.iconIcon}>
        <FaSearch size={"1.6em"} color={color.fontBlack} />
      </span>
    </div>
  );
};

export default SearchInput;
