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

const Learn: React.FC<ILearnProps> = () => {
  const [word, setWord] = useState<IFinalObject>();
  const [isArrayEmpty, setIsArrayEmpty] = useState<boolean>(false);
  const [inputPlace, setInputPlace] = useState<string>("");
  const [colorAnswer, setColorAnswer] = useState<string>("");
  const [isShowInfo, setIsShowInfo] = useState<boolean>(false);
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
      setIsArrayEmpty(false);
    } else {
      setIsArrayEmpty(true);
    }
  };

  useEffect(() => {
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
        setColorAnswer(color.activateButton);
      } else {
        addPoint(word.id, false);
        setColorAnswer(color.error);
      }

      if (timerID.current !== null) clearTimeout(timerID.current);

      timerID.current = window.setTimeout(() => {
        restartWord();
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
      <div className={classes.mainWord}>
        {isArrayEmpty
          ? "Sorry :("
          : isShowInfo
          ? word?.learning
          : word?.original}
      </div>
      {isShowInfo ? (
        <SpinnerButton restartWord={restartWord} color={colorAnswer} />
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
