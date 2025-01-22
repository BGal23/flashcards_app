import { useEffect, useState } from "react";
import AddButton from "../Buttons/AddButton/AddButton";
import AddInput from "../Inputs/AddInput/AddInput";
import useStyles from "./styles";
import validate from "../../utils/validate";
import { TbAlphabetLatin, TbAlphabetGreek } from "react-icons/tb";
import { Slider } from "@mui/material";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa6";
import color from "../../assets/colors";

const Add = () => {
  const [original, setOriginal] = useState<string>("");
  const [learning, setLearning] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [scale, setScale] = useState<number>(0);
  const [isAddButtonActive, setIsAddButtonActive] = useState<boolean>(false);
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const classes = useStyles();

  useEffect(() => {
    if (validate(original) === "" && validate(learning) === "") {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }
  }, [original, learning]);

  const clearData = (clear: boolean) => {
    if (clear) {
      setOriginal("");
      setLearning("");
      setDescription("");
      setScale(0);
      setIsAddButtonActive(false);
      return;
    }
  };

  const dataObject = {
    original: original.trimEnd(),
    learning: learning.trimEnd(),
    description: description,
    scale: scale,
    isActive: true,
  };

  return (
    <div className={classes.container}>
      <AddInput
        id={"original-id"}
        placeholder={"Your language..."}
        isDescription={false}
        value={original}
        changeValue={setOriginal}
        error={(isAddButtonActive && validate(original)) || ""}
        icon={<TbAlphabetLatin size={"3em"} color={color.fontBlack} />}
      />
      <AddInput
        id={"learning-id"}
        placeholder={"Translate..."}
        isDescription={false}
        value={learning}
        changeValue={setLearning}
        error={(isAddButtonActive && validate(learning)) || ""}
        icon={<TbAlphabetGreek size={"3em"} color={color.fontBlack} />}
      />
      <AddInput
        id={"textarea-id"}
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
        isValidated={isValidated}
        activate={setIsAddButtonActive}
      />
    </div>
  );
};

export default Add;
