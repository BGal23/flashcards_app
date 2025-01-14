import { useEffect, useState, useRef } from "react";
import { ILearnProps } from "../../types/props";
import useStyles from "./styles";
import wordDraw from "../../utils/wordDraw";
import { IFinalObject } from "../../types/data";
import addPoint from "../../utils/addPoint";
import CheckInput from "../Inputs/CheckInput/CheckInput";
import SpinnerButton from "../Buttons/SpinnerButton/SpinnerButton";
import color from "../../assets/colors";
import CheckButton from "../Buttons/CheckButton/CheckButton";
import levenshteinDistance from "../../utils/levenshteinDistance";

const Learn: React.FC<ILearnProps> = ({ isShowWrongWord, setMainView }) => {
  const [word, setWord] = useState<IFinalObject>();
  const [isArrayEmpty, setIsArrayEmpty] = useState<boolean>(false);
  const [inputPlace, setInputPlace] = useState<string>("");
  const [colorAnswer, setColorAnswer] = useState<string>("");
  const [isShowInfo, setIsShowInfo] = useState<boolean>(false);
  const [wrongAnswer, setWrongAnswer] = useState<string>("");
  const classes = useStyles();
  const timerID = useRef<number | null>(null);

  const fetchWord = async (key: string, restart: boolean) => {
    const storageWord = localStorage.getItem(key);
    const newWord = await wordDraw();

    if (storageWord !== null && !restart) {
      setWord(JSON.parse(storageWord));
    } else if (newWord !== null) {
      localStorage.setItem(key, JSON.stringify(newWord));
      setWord(newWord);
    }
  };

  useEffect(() => {
    const total = localStorage.getItem("total");
    if (Number(total) === 0) {
      localStorage.removeItem("currentWord");
      setIsArrayEmpty(true);
    } else {
      setIsArrayEmpty(false);
    }
    fetchWord("currentWord", false);
  }, []);

  const wordCheck = (
    word: IFinalObject | undefined,
    yourTranslation: string
  ) => {
    if (word) {
      setIsShowInfo(true);
      if (
        word.learning.toLocaleLowerCase() ===
        yourTranslation.toLocaleLowerCase().trimEnd()
      ) {
        addPoint(word.id, true);
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
        addPoint(word.id, false);
        setWrongAnswer(inputPlace);
        setColorAnswer(color.error);
      }

      if (timerID.current !== null) clearTimeout(timerID.current);

      timerID.current = window.setTimeout(() => {
        restartWord();
        setWrongAnswer("");
      }, 5000);
      setInputPlace("");
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
        <button type="button" onClick={() => setMainView("add")}>
          Add new word
        </button>
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
          <SpinnerButton correctWord={restartWord} color={colorAnswer} />
        </>
      ) : (
        <>
          <CheckInput checkedWord={inputPlace} setCheckedWord={setInputPlace} />

          <div className={classes.buttonsWrapper}>
            <CheckButton
              isDisabled={false}
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
          <div className={classes.description}>{word?.description}</div>
        </>
      )}
    </div>
  );
};

export default Learn;
