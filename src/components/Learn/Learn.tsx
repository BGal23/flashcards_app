import { useEffect, useState } from "react";
import { ILearnProps } from "../../types/props";
import useStyles from "./styles";
import wordDraw from "../../utils/wordDraw";
import { IFinalObject } from "../../types/data";
import addPoint from "../../utils/addPoint";
import CheckInput from "../Inputs/CheckInput/CheckInput";
import SpinnerButton from "../Buttons/SpinnerButton/SpinnerButton";

const Learn: React.FC<ILearnProps> = () => {
  const [word, setWord] = useState<IFinalObject>();
  const [isArrayEmpty, setIsArrayEmpty] = useState<boolean>(false);
  const [inputPlace, setInputPlace] = useState<string>("");
  // const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isShowInfo, setIsShowInfo] = useState<boolean>(false);
  const classes = useStyles();

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

  let timerID: number | null = null;

  const wordCheck = (
    word: IFinalObject | undefined,
    yourTranslation: string
  ) => {
    if (word) {
      setIsShowInfo(true);
      if (word.learning === yourTranslation) {
        addPoint(word.id, true);

        console.log("Correct");
      } else {
        addPoint(word.id, false);
        console.log("Not correct");
      }
      if (timerID) clearTimeout(timerID);

      timerID = setTimeout(() => {
        restartWord();
      }, 3000);

      setInputPlace("");
    } else {
      console.error("Data error");
    }
  };

  const restartWord = () => {
    if (timerID) {
      clearTimeout(timerID);
      timerID = null;
    }

    fetchWord("currentWord", true);
    setIsShowInfo(false);
  };

  return (
    <div className={classes.container}>
      {/* <div style={{ display: isShowInfo ? "block" : "none" }}>SHOW</div> */}
      <div className={classes.mainWord}>
        {isArrayEmpty ? "Sorry :(" : word?.original}
      </div>
      {isShowInfo ? (
        <SpinnerButton restartWord={restartWord} />
      ) : (
        <CheckInput checkedWord={inputPlace} setCheckedWord={setInputPlace} />
      )}
      <button
        disabled={inputPlace.length <= 0}
        type="button"
        onClick={() => wordCheck(word, inputPlace)}
      >
        Check!
      </button>
    </div>
  );
};

export default Learn;
