import { useEffect, useState } from "react";
import Filters from "../Filters/Filters";
import SearchInput from "../Inputs/SearchInput/SearchInput";
import useStyles from "./styles";
import { getFromLocalStorage } from "../../utils/localStorage";
import { IFinalObject } from "../../types/data";
import ListElement from "./ListElement/ListElement";

const List = () => {
  const [usedFilter, setUsedFilter] = useState<string>("");
  const [searchedWord, setSearchedWord] = useState<string>("");
  const [searchedList, setSearchedList] = useState<IFinalObject[]>([]);
  const [list, setList] = useState<IFinalObject[]>([]);
  const classes = useStyles();

  const sortList = (sort: string) => {
    const sortedList = [...searchedList];
    switch (sort) {
      case "a>z":
        sortedList.sort((a, b) => a.original.localeCompare(b.original));
        break;
      case "z>a":
        sortedList.sort((a, b) => b.original.localeCompare(a.original));
        break;
      case "+>-":
        sortedList.sort((a, b) => (b.scale ?? 0) - (a.scale ?? 0));
        break;
      case "->+":
        sortedList.sort((a, b) => (a.scale ?? 0) - (b.scale ?? 0));
        break;
      default:
        break;
    }
    setSearchedList(sortedList);
  };

  useEffect(() => {
    setList(getFromLocalStorage("data") || []);
  }, []);

  useEffect(() => {
    const newList: IFinalObject[] = list.filter(
      (item) =>
        item.learning.toLowerCase().includes(searchedWord.toLowerCase()) ||
        item.original.toLowerCase().includes(searchedWord.toLowerCase())
    );
    setSearchedList(newList);
  }, [searchedWord, list]);

  useEffect(() => {
    if (usedFilter) sortList(usedFilter);
  }, [usedFilter]);

  return (
    <div className={classes.container}>
      <SearchInput
        searchedWord={searchedWord}
        setSearchedWord={setSearchedWord}
      />
      <Filters usedFilter={usedFilter} setUsedFilter={setUsedFilter} />
      <div className={classes.listWrapper}>
        {searchedList.length > 0 ? (
          searchedList.map((element: IFinalObject) => (
            <div key={element.id}>
              <ListElement element={element} />
            </div>
          ))
        ) : (
          <div className={classes.emptyArray}>
            <span>Your list is empty</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
