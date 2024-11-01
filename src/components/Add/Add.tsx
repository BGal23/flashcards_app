import { useEffect, useState } from "react";
import { IAddProps } from "../../types/props";
import AddButton from "../Buttons/AddButton/AddButton";
import AddInput from "../Inputs/AddInput/AddInput";
import useStyles from "./styles";
import validateWord from "../../utils/validateWord";

const Add: React.FC<IAddProps> = () => {
  const [originalWord, setOriginalWord] = useState<string>("");
  const [learningWord, setLearningWord] = useState<string>("");
  const [description, setDescription] = useState<string>("");
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
      setIsAddButtonActive(false);
      return;
    }
  };

  const dataObject = {
    originalWord: originalWord,
    learningWord: learningWord,
    description: description,
    scale: 0,
  };

  return (
    <div className={classes.container}>
      <AddInput
        title={"Word in your origin language:"}
        placeholder={"pies"}
        isDescription={false}
        value={originalWord}
        changeValue={setOriginalWord}
        error={(isAddButtonActive && validateWord(originalWord)) || ""}
      />
      <AddInput
        title={"Word in the language you are learning:"}
        placeholder={"dog"}
        isDescription={false}
        value={learningWord}
        changeValue={setLearningWord}
        error={(isAddButtonActive && validateWord(learningWord)) || ""}
      />
      <AddInput
        title={"Description (optional):"}
        placeholder={"animal, pet"}
        isDescription={true}
        value={description}
        changeValue={setDescription}
      />
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
