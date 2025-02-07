import { useEffect, useState } from "react";
import Filters from "../Filters/Filters";
import SearchInput from "../Inputs/SearchInput/SearchInput";
import useStyles from "./styles";
import { IObject, ISort } from "../../types/data";
import ListElement from "./ListElement/ListElement";
import { useIndexedDB } from "react-indexed-db-hook";
import getAllData from "../../db/getAllData";
import PopUp from "../PopUp/PopUp";
import color from "../../assets/colors";
import {
  FaSortAlphaDown,
  FaSortAlphaDownAlt,
  FaSortAmountDown,
  FaSortAmountDownAlt,
} from "react-icons/fa";

const filterElements: ISort[] = [
  {
    id: 1,
    activate: "a>z",
    icon: <FaSortAlphaDown size={"2.5em"} color={color.fontBlack} />,
  },
  {
    id: 2,
    activate: "z>a",
    icon: <FaSortAlphaDownAlt size={"2.5em"} color={color.fontBlack} />,
  },
  {
    id: 3,
    activate: "+>-",
    icon: <FaSortAmountDown size={"2.5em"} color={color.fontBlack} />,
  },
  {
    id: 4,
    activate: "->+",
    icon: <FaSortAmountDownAlt size={"2.5em"} color={color.fontBlack} />,
  },
];

const List = () => {
  const [usedFilter, setUsedFilter] = useState<string>("");
  const [searchedWord, setSearchedWord] = useState<string>("");
  const [searchedList, setSearchedList] = useState<IObject[]>([]);
  const [list, setList] = useState<IObject[]>([]);
  const { getAll } = useIndexedDB("data");
  const classes = useStyles();
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const [alertColor, setAlertColor] = useState<string>(color.background);
  const [alertText, setAlertText] = useState<string>("");

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
    (async () => {
      const data = await getAllData(getAll);
      return setList(data);
    })();
  }, [getAll]);

  useEffect(() => {
    const newList: IObject[] = list.filter(
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
    <>
      <div className={classes.container}>
        <SearchInput
          searchedWord={searchedWord}
          setSearchedWord={setSearchedWord}
        />
        <Filters
          usedFilter={usedFilter}
          setUsedFilter={setUsedFilter}
          element={filterElements}
        />
        <div className={classes.listWrapper}>
          {searchedList.length > 0 ? (
            searchedList.map((element: IObject) => (
              <div key={element.id}>
                <ListElement
                  element={element}
                  setIsOpenPopUp={setIsOpenPopUp}
                  setAlertColor={setAlertColor}
                  setAlertText={setAlertText}
                />
              </div>
            ))
          ) : (
            <div className={classes.emptyArray}>
              <span>Your list is empty</span>
            </div>
          )}
        </div>
      </div>
      <PopUp
        color={alertColor}
        text={alertText}
        time={5000}
        isOpen={isOpenPopUp}
        setIsOpen={setIsOpenPopUp}
      />
    </>
  );
};

export default List;
