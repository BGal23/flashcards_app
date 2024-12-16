import { createStyles, makeStyles } from "@mui/styles";
import color from "../../../assets/colors";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      height: "3em",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      borderBottom: "1px solid black",
      padding: "0.5em 1em 0 1em ",
      justifyContent: "space-between",
    },
    wordsWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "0.3em",
      paddingBottom: "0.5em",
    },
    description: {
      paddingBottom: "0.5em",
    },
    buttonsWrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "8px",
      paddingBottom: "0.5em",
      overflow: "hidden",
      height: "36px",
    },
    button: {
      width: "36px",
      height: "36px",
      border: "none",
      borderRadius: "18px",
      background: color.fontGrey,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 0,
      zIndex: 0,
    },
  })
);

export default useStyles;
