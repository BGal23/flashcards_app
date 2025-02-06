import { useEffect, useState } from "react";
import { IEditElementProps } from "../../../types/props";
import useStyles from "./styles";
import validate from "../../../utils/validate";
import color from "../../../assets/colors";
import checkCategories from "../../../db/checkCategories";

const EditElement: React.FC<IEditElementProps> = ({
  isEdited,
  setIsValidated,
  original,
  learning,
  description,
  category,
  setOriginal,
  setLearning,
  setDescription,
  setCategory,
  isActive,
  id,
}) => {
  const classes = useStyles();
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    if (validate(original) === "" && validate(learning) === "" && isEdited) {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }
  }, [original, learning, description, category, setIsValidated, isEdited]);

  useEffect(() => {
    (async () => {
      try {
        const categoriesList = await checkCategories();
        if (categoriesList) setCategories(categoriesList);
      } catch (error) {
        console.error("Error checking store data:", error);
      }
    })();
  }, []);

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
      id: `learning-${id}`,
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
          <select
            id={`category-{${id}`}
            className={classes.select}
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value={""}>none</option>
            {categories.map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
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
