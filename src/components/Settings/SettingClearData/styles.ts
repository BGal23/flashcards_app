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
    buttonWrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
    },
    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: color.fontBlack,
      border: "none",
      borderRadius: 4,
      width: "2.5em",
      height: "2.5em",
    },
    title: { margin: "10px 0 10px" },
  })
);

export default useStyles;
