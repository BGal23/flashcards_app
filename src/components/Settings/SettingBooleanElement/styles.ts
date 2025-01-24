import { createStyles, makeStyles } from "@mui/styles";
import color from "../../../assets/colors";

const useStyles = makeStyles(() =>
  createStyles({
    box: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: color.fontBlack,
    },
    title: { margin: "10px 0 10px" },
  })
);

export default useStyles;
