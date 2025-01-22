import { useEffect } from "react";
import { IEditElementProps } from "../../../types/props";
import useStyles from "./styles";
import validate from "../../../utils/validate";
import color from "../../../assets/colors";

const EditElement: React.FC<IEditElementProps> = ({
  isEdited,
  setIsValidated,
  original,
  learning,
  description,
  setOriginal,
  setLearning,
  setDescription,
  isActive,
  id,
}) => {
  const classes = useStyles();

  useEffect(() => {
    if (validate(original) === "" && validate(learning) === "") {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }
  }, [original, learning, setIsValidated]);

  const getInputStyle = (word: string) => ({
    color: validate(word) === "" ? "black" : color.error,
    borderBottom:
      validate(word) === "" ? "1px solid black" : `2px solid ${color.error}`,
  });

  const inputs = [
    {
      id: `original-${id}`,
      value: original,
      setValue: setOriginal,
    },
    {
      id: `learning-{${id}`,
      value: learning,
      setValue: setLearning,
    },
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
          {inputs.map((input) => (
            <input
              id={input.id}
              key={input.id}
              style={getInputStyle(input.value)}
              className={classes.input}
              type="text"
              value={input.value}
              maxLength={30}
              onChange={(event) => input.setValue(event.target.value)}
            />
          ))}
          <textarea
            id={`textarea-${id}`}
            className={classes.textarea}
            value={description}
            maxLength={90}
            onChange={(event) => setDescription(event.target.value)}
          />
        </>
      ) : (
        <>
          {[original, learning].map((element: string, index: number) => (
            <span
              key={index}
              className={classes.text}
              style={{ textDecoration: isActive ? "none" : "line-through" }}
            >
              {element}
            </span>
          ))}
        </>
      )}
    </div>
  );
};

export default EditElement;
