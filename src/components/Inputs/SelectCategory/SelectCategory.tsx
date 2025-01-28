import useStyles from "./styles";
import { ISelectCategoryProps } from "../../../types/props";
import { useEffect, useState } from "react";
import checkCategories from "../../../db/checkCategories";
import { FaFolderTree } from "react-icons/fa6";
import color from "../../../assets/colors";
import { saveToLocalStorage } from "../../../utils/localStorage";

const SelectCategory: React.FC<ISelectCategoryProps> = ({
  category,
  setCategory,
}) => {
  const [categories, setCategories] = useState<string[]>([]);
  const classes = useStyles();

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

  const handleCategory = (newCategory: string) => {
    setCategory(newCategory);
    saveToLocalStorage("category", newCategory);
  };

  return (
    <>
      {categories && (
        <div className={classes.selectWrapper}>
          <span className={classes.iconWrapper}>
            <FaFolderTree size={"1em"} color={color.fontBlack} />
            <div>Category</div>
          </span>
          <select
            id="select-category"
            className={classes.select}
            // style={{ color: value === "" ? "gray" : color.fontBlack }}
            value={category}
            onChange={(event) => handleCategory(event.target.value)}
          >
            <option value="">All...</option>
            {categories.map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};

export default SelectCategory;
