import { useEffect, useState } from "react";
import AddButton from "../Buttons/AddButton/AddButton";
import AddInput from "../Inputs/AddInput/AddInput";
import useStyles from "./styles";
import validate from "../../utils/validate";
import { TbAlphabetLatin, TbAlphabetGreek } from "react-icons/tb";
import { Slider } from "@mui/material";
import { FaThumbsUp, FaThumbsDown, FaFolderTree } from "react-icons/fa6";
import color from "../../assets/colors";
import AddTextarea from "../Inputs/AddTextarea/AddTextarea";
import AddOptions from "../Inputs/AddOptions/AddOptions";
import checkCategories from "../../db/checkCategories";

const Add = () => {
  const [original, setOriginal] = useState<string>("");
  const [learning, setLearning] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [scale, setScale] = useState<number>(0);
  const [newCategory, setNewCategory] = useState<string>("");
  const [isAddButtonActive, setIsAddButtonActive] = useState<boolean>(false);
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const [isOpenNewCategory, setIsOpenNewCategory] = useState<boolean>(false);
  const classes = useStyles();

  useEffect(() => {
    if (validate(original) === "" && validate(learning) === "") {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }
  }, [original, learning, category]);

  useEffect(() => {
    (async () => {
      try {
        const categoriesList = await checkCategories();
        if (categoriesList) setCategories(categoriesList);
      } catch (error) {
        console.error("Error checking store data:", error);
      }
    })();
  }, [category]);

  const clearData = (clear: boolean) => {
    if (clear) {
      setOriginal("");
      setLearning("");
      setDescription("");
      setCategory("");
      setScale(0);
      setIsAddButtonActive(false);
      setIsOpenNewCategory(false);
      setNewCategory("");
      return;
    }
  };

  const dataObject = {
    original: original.trimEnd(),
    learning: learning.trimEnd(),
    category: category === "create" ? "" : category.trimEnd(),
    description: description,
    scale: scale,
    active: true,
  };

  return (
    <div className={classes.container}>
      <AddInput
        id={"original-id"}
        placeholder={"Native language..."}
        value={original}
        changeValue={setOriginal}
        error={(isAddButtonActive && validate(original)) || ""}
        icon={<TbAlphabetLatin size={"3em"} color={color.fontBlack} />}
      />
      <AddInput
        id={"learning-id"}
        placeholder={"Learned language..."}
        value={learning}
        changeValue={setLearning}
        error={(isAddButtonActive && validate(learning)) || ""}
        icon={<TbAlphabetGreek size={"3em"} color={color.fontBlack} />}
      />
      <AddOptions
        id={"select-id"}
        value={category}
        changeValue={setCategory}
        categories={categories}
        isOpenNewCategory={isOpenNewCategory}
        setIsOpenNewCategory={setIsOpenNewCategory}
        newCategory={newCategory}
        setNewCategory={setNewCategory}
        icon={<FaFolderTree size={"2em"} color={color.fontBlack} />}
      />
      <AddTextarea
        id={"textarea-id"}
        placeholder={"Description (optional)"}
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
        disabled={category === "create"}
        dataObject={dataObject}
        clearData={clearData}
        isValidated={isValidated}
        activate={setIsAddButtonActive}
      />
    </div>
  );
};

export default Add;
