import { FaSearch } from "react-icons/fa";
import useStyles from "./styles";
import { ISearchInputProps } from "../../../types/props";

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
      <span className={classes.iconWrapper}>
        <FaSearch size={"1.6em"} color="black" />
      </span>
    </div>
  );
};

export default SearchInput;
