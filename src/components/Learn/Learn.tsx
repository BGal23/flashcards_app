import { useEffect, useState } from "react";
import { ILearnProps } from "../../types/props";
import useStyles from "./styles";
import wordDraw from "../../utils/wordDraw";

const Learn: React.FC<ILearnProps> = () => {
  const [word, setWord] = useState<string>("");
  const [isArrayEmpty, setIsArrayEmpty] = useState<boolean>(false);
  const classes = useStyles();

  useEffect(() => {
    const fetchWord = async () => {
      const newWord = await wordDraw();
      if (newWord !== null) {
        setWord(newWord);
        setIsArrayEmpty(false);
      } else {
        setIsArrayEmpty(true);
      }
    };

    fetchWord();
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
