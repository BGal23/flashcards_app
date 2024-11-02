import { IListElementProps } from "../../../types/props";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import useStyles from "./styles";
import { Checkbox } from "@mui/material";
import color from "../../../assets/colors";
import { removeItemFromLocalStorageById } from "../../../utils/localStorage";

const ListElement: React.FC<IListElementProps> = ({
  element: { id, original, learning, isActive },
}) => {
  const label = {
    id: "custom-checkbox",
    value: isActive,
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.wordsWrapper}>
        <span>{original}</span>
        <span>{learning}</span>
      </div>
      <div className={classes.buttonsWrapper}>
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: "2em",
              color: color.fontGrey,
              margin: -1.3,
            },
          }}
        />
        <button type="button" className={classes.button}>
          <FaEdit size={"1.5em"} color={"black"} />
        </button>
        <button
          type="button"
          className={classes.button}
          onClick={() => removeItemFromLocalStorageById("data", id)}
        >
          <MdDelete size={"2em"} color={"black"} />
        </button>
      </div>
    </div>
  );
};

export default ListElement;
