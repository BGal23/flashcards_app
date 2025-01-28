import { useEffect, useState, useRef } from "react";
import { ILearnProps } from "../../types/props";
import useStyles from "./styles";
import wordDraw from "../../utils/wordDraw";
import { IObject } from "../../types/data";
import CheckInput from "../Inputs/CheckInput/CheckInput";
import SpinnerButton from "../Buttons/SpinnerButton/SpinnerButton";
import color from "../../assets/colors";
import CheckButton from "../Buttons/CheckButton/CheckButton";
import levenshteinDistance from "../../utils/levenshteinDistance";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useIndexedDB } from "react-indexed-db-hook";
import checkTotal from "../../db/checkTotal";
import SelectCategory from "../Inputs/SelectCategory/SelectCategory";
import { TiPencil } from "react-icons/ti";
import { CgOptions } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/localStorage";

const Learn: React.FC<ILearnProps> = ({
  isShowWrongWord,
  timeNextWord,
  setMainView,
}) => {
  const [word, setWord] = useState<IObject>();
  const [isArrayEmpty, setIsArrayEmpty] = useState<boolean>(false);
  const [inputPlace, setInputPlace] = useState<string>("");
  const [colorAnswer, setColorAnswer] = useState<string>("");
  const [isShowInfo, setIsShowInfo] = useState<boolean>(false);
  const [wrongAnswer, setWrongAnswer] = useState<string>("");
  const [isOpenOptions, setIsOpenOptions] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("");
  const classes = useStyles();
  const timerID = useRef<number | null>(null);
  const { getAll, getByID, update } = useIndexedDB("data");

  const fetchWord = async (key: string, restart: boolean) => {
    const storageWordId = localStorage.getItem(key);
    const newWord = await wordDraw(getAll, category);

    if (storageWordId !== null && !restart) {
      const storageWord = await getByID(JSON.parse(storageWordId));
      if (storageWord) setWord(storageWord);
      else if (newWord !== null) saveNewWord(key, newWord);
      else console.log("Data error, element doesn't exist!");
    } else if (newWord !== null) saveNewWord(key, newWord);
    else console.log("Data error, element doesn't exist!");
  };

  const saveNewWord = (key: string, newWord: IObject) => {
    localStorage.setItem(key, JSON.stringify(newWord.id));
    setWord(newWord);
  };

  useEffect(() => {
    (async () => {
      try {
        setIsArrayEmpty(!(await checkTotal("MyDB", "data")));
      } catch (error) {
        console.error("Error checking store data:", error);
      }
    })();

    const currentCategory = getFromLocalStorage("category");
    if (currentCategory) {
      setCategory(currentCategory);
    } else {
      saveToLocalStorage("category", "");
      setCategory("");
    }

    fetchWord("currentWord", false);
  }, []);

  const wordCheck = (word: IObject | undefined, yourTranslation: string) => {
    if (word) {
      setIsShowInfo(true);
      if (
        word.learning.toLocaleLowerCase() ===
        yourTranslation.toLocaleLowerCase().trimEnd()
      ) {
        update({ ...word, scale: word.scale + 1 });
        setColorAnswer(color.headerButton);
      } else if (
        levenshteinDistance(
          word.learning.toLocaleLowerCase(),
          yourTranslation.toLocaleLowerCase().trimEnd()
        ) === 1
      ) {
        setWrongAnswer(inputPlace);
        setColorAnswer(color.activateButton);
      } else {
        update({ ...word, scale: word.scale - 1 });
        setWrongAnswer(inputPlace);
        setColorAnswer(color.error);
      }

      if (timerID.current !== null) clearTimeout(timerID.current);

      timerID.current = window.setTimeout(() => {
        restartWord();
        setWrongAnswer("");
      }, timeNextWord);
      setInputPlace("");
      setIsOpenOptions(false);
    } else {
      console.error("Data error");
    }
  };

  const restartWord = () => {
    if (timerID.current !== null) {
      clearTimeout(timerID.current);
      timerID.current = null;
    }

    fetchWord("currentWord", true);
    setIsShowInfo(false);
  };

  return (
    <div className={classes.container}>
      {isArrayEmpty ? (
        <div className={classes.addInfoWrapper}>
          <div>Add new word</div>
          <button
            className={classes.addIcon}
            type="button"
            onClick={() => setMainView("add")}
          >
            <FaArrowAltCircleRight size="2em" color={color.fontBlack} />
          </button>
        </div>
      ) : (
        <div className={classes.mainWord}>
          {isShowInfo ? word?.learning : word?.original}
        </div>
      )}
      {isShowInfo ? (
        <>
          {colorAnswer !== color.headerButton && isShowWrongWord && (
            <div className={classes.mainWord} style={{ color: colorAnswer }}>
              {wrongAnswer}
            </div>
          )}
          <SpinnerButton
            correctWord={restartWord}
            color={colorAnswer}
            time={timeNextWord}
          />
        </>
      ) : (
        <>
          <CheckInput checkedWord={inputPlace} setCheckedWord={setInputPlace} />

          <div className={classes.buttonsWrapper}>
            <CheckButton
              isDisabled={isArrayEmpty}
              wordCheck={() => wordCheck(word, inputPlace)}
              title="Skip"
              color={color.error}
            />
            <CheckButton
              isDisabled={inputPlace.length <= 0}
              wordCheck={() => wordCheck(word, inputPlace)}
              title="Check"
              color={color.headerButton}
            />
          </div>
          <div
            style={{
              transform: isOpenOptions ? "translateY(-200px)" : "translateY(0)",
            }}
            className={classes.bottomWrapper}
          >
            <SelectCategory category={category} setCategory={setCategory} />

            <div className={classes.description}>
              <span className={classes.iconWrapper}>
                <TiPencil size={"1em"} color={color.fontBlack} />
                <div>Description</div>
              </span>
              {word?.description}
            </div>
          </div>
          <button
            className={classes.openButton}
            type="button"
            onClick={() => setIsOpenOptions(!isOpenOptions)}
          >
            {isOpenOptions ? (
              <IoClose size={"2.3em"} color={color.fontBlack} />
            ) : (
              <CgOptions size={"2.3em"} color={color.fontBlack} />
            )}
          </button>
        </>
      )}
    </div>
  );
};

export default Learn;
