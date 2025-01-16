import { createStyles, makeStyles } from "@mui/styles";
import color from "../../assets/colors";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      margin: "2em",
    },
    list: {
      "& li": {
        borderBottom: `1px solid ${color.fontBlack}`,
        padding: "5px 0 5px",

        "&:last-child": {
          border: "none",
        },
      },
    },
  })
);

export default useStyles;
