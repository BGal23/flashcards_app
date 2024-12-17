import { useEffect } from "react";
import { IEditElementProps } from "../../../types/props";
import useStyles from "./styles";
import validateWord from "../../../utils/validateWord";
import color from "../../../assets/colors";

const EditElement: React.FC<IEditElementProps> = ({
  element: { original, learning, description },
  isEdited,
  setIsWordsValidated,
  originalWord,
  learningWord,
  descriptionText,
  setOriginalWord,
  setLearningWord,
  setDescriptionText,
}) => {
  const classes = useStyles();

  useEffect(() => {
    setOriginalWord(original);
    setLearningWord(learning);
    setDescriptionText(description);
  }, [
    description,
    isEdited,
    learning,
    original,
    setDescriptionText,
    setLearningWord,
    setOriginalWord,
  ]);

  useEffect(() => {
    if (
      validateWord(originalWord) === "" &&
      validateWord(learningWord) === ""
    ) {
      setIsWordsValidated(true);
    } else {
      setIsWordsValidated(false);
    }
  }, [originalWord, learningWord, setIsWordsValidated]);

  const getInputStyle = (word: string) => ({
    color: validateWord(word) === "" ? "black" : color.error,
    borderBottom:
      validateWord(word) === ""
        ? "1px solid black"
        : `2px solid ${color.error}`,
  });

  const inputs = [
    { value: originalWord, setValue: setOriginalWord },
    { value: learningWord, setValue: setLearningWord },
  ];

  return (
    <div
      className={classes.box}
      style={{
        width: isEdited ? "calc(100% - 90px)" : "calc(100% - 140px)",
      }}
    >
      {isEdited ? (
        <>
          {inputs.map((input, index) => (
            <input
              key={index}
              style={getInputStyle(input.value)}
              className={classes.input}
              type="text"
              value={input.value}
              maxLength={30}
              onChange={(event) => input.setValue(event.target.value)}
            />
          ))}
          <textarea
            className={classes.textarea}
            value={descriptionText}
            onChange={(event) => setDescriptionText(event.target.value)}
          />
        </>
      ) : (
        <>
          <span className={classes.text}>{original}</span>
          <span className={classes.text}>{learning}</span>
        </>
      )}
    </div>
  );
};

export default EditElement;
