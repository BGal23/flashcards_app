import { useEffect, useState } from "react";
import { IAddProps } from "../../types/props";
import AddButton from "../Buttons/AddButton/AddButton";
import AddInput from "../Inputs/AddInput/AddInput";
import useStyles from "./styles";
import validateWord from "../../utils/validateWord";
import { TbAlphabetLatin, TbAlphabetGreek } from "react-icons/tb";
import { Slider } from "@mui/material";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa6";
import color from "../../assets/colors";

const Add: React.FC<IAddProps> = () => {
  const [originalWord, setOriginalWord] = useState<string>("");
  const [learningWord, setLearningWord] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [scale, setScale] = useState<number>(0);
  const [isAddButtonActive, setIsAddButtonActive] = useState<boolean>(false);
  const [isWordsValidated, setIsWordsValidated] = useState<boolean>(false);
  const classes = useStyles();

  useEffect(() => {
    if (
      validateWord(originalWord) === "" &&
      validateWord(learningWord) === ""
    ) {
      setIsWordsValidated(true);
    } else {
      setIsWordsValidated(false);
    }
  }, [originalWord, learningWord]);

  const clearData = (clear: boolean) => {
    if (clear) {
      setOriginalWord("");
      setLearningWord("");
      setDescription("");
      setScale(0);
      setIsAddButtonActive(false);
      return;
    }
  };

  const dataObject = {
    originalWord: originalWord.trimEnd(),
    learningWord: learningWord.trimEnd(),
    description: description,
    scale: scale,
  };

  return (
    <div className={classes.container}>
      <AddInput
        placeholder={"Your language..."}
        isDescription={false}
        value={originalWord}
        changeValue={setOriginalWord}
        error={(isAddButtonActive && validateWord(originalWord)) || ""}
        icon={<TbAlphabetLatin size={"3em"} color={color.fontBlack} />}
      />
      <AddInput
        placeholder={"Translate..."}
        isDescription={false}
        value={learningWord}
        changeValue={setLearningWord}
        error={(isAddButtonActive && validateWord(learningWord)) || ""}
        icon={<TbAlphabetGreek size={"3em"} color={color.fontBlack} />}
      />
      <AddInput
        placeholder={"Description (optional)"}
        isDescription={true}
        value={description}
        changeValue={setDescription}
      />
      <div className={classes.slider}>
        <FaThumbsDown size={"2em"} color={color.error} />
        <Slider
          value={scale}
          defaultValue={0}
          onChange={(_event: Event, newValue: number | number[]) =>
            setScale(newValue as number)
          }
          step={15}
          min={-30}
          max={30}
          sx={{ color: color.shadow }}
        />
        <FaThumbsUp size={"2em"} color={color.headerButton} />
      </div>
      <AddButton
        dataObject={dataObject}
        clearData={clearData}
        isWordsValidated={isWordsValidated}
        activate={setIsAddButtonActive}
      />
    </div>
  );
};

export default Add;
