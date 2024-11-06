import { useEffect, useState } from "react";
import { ILearnProps } from "../../types/props";
import useStyles from "./styles";
import wordDraw from "../../utils/wordDraw";

const Learn: React.FC<ILearnProps> = () => {
  const [word, setWord] = useState<string>("");
  const [isArrayEmpty, setIsArrayEmpty] = useState<boolean>(false);
  const classes = useStyles();

  useEffect(() => {
    const fetchWord = async (key: string) => {
      const storageWord = localStorage.getItem(key);
      const newWord = await wordDraw();

      if (storageWord !== null) {
        setWord(JSON.parse(storageWord));
      } else if (newWord !== null) {
        localStorage.setItem(key, JSON.stringify(newWord));
        setWord(newWord);
        setIsArrayEmpty(false);
      } else {
        setIsArrayEmpty(true);
      }
    };

    fetchWord("currentWord");
  }, []);

  return (
    <div className={classes.container}>
      <div></div>
      {isArrayEmpty ? <div>Sorry :(</div> : <div>{word}</div>}
      <input type="text" />
    </div>
  );
};

export default Learn;
