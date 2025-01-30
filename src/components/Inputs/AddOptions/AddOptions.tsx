import { IAddOptionsProps } from "../../../types/props";
import useStyles from "./styles";
import color from "../../../assets/colors";
import { IoIosCheckmark, IoIosClose } from "react-icons/io";

const AddOptions: React.FC<IAddOptionsProps> = ({
  value,
  changeValue,
  icon,
  id,
  categories,
  isOpenNewCategory,
  setIsOpenNewCategory,
  newCategory,
  setNewCategory,
}) => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (newCategory !== selectedValue) setIsOpenNewCategory(false);
    changeValue(selectedValue);
    if (selectedValue !== "create") setNewCategory("");
  };

  return (
    <div className={classes.container}>
      <span className={classes.selectWrapper}>
        {icon}
        <select
          id={id}
          className={classes.select}
          style={{
            color: value === "" ? "gray" : color.fontBlack,
            fontStyle: value === "create" ? "italic" : "normal",
          }}
          value={value}
          onChange={handleChange}
        >
          <option value="" disabled>
            Category... (optional)
          </option>
          {categories.map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
          {isOpenNewCategory && (
            <option value={newCategory}>{newCategory}</option>
          )}
          <option value="create">--Create new category</option>
        </select>
      </span>

      {value === "create" && (
        <span className={classes.addWrapper}>
          <input
            className={classes.addInput}
            value={newCategory}
            onChange={(event) => {
              setNewCategory(event.target.value);
            }}
            placeholder="Enter new category"
          />
          <button
            disabled={newCategory === ""}
            className={classes.button}
            style={{
              background: color.headerButton,
              opacity: newCategory === "" ? 0.5 : 1,
            }}
            onClick={() => {
              setIsOpenNewCategory(true);
              if (newCategory.trim()) {
                changeValue(newCategory);
              }
            }}
            type="button"
          >
            <IoIosCheckmark size="2em" color={color.fontBlack} />
          </button>
          <button
            style={{ background: color.error }}
            className={classes.button}
            onClick={() => {
              setIsOpenNewCategory(false);
              setNewCategory("");
              changeValue("");
            }}
            type="button"
          >
            <IoIosClose size="2em" color={color.fontBlack} />
          </button>
        </span>
      )}
    </div>
  );
};

export default AddOptions;
