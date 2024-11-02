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
      gap: "0.5em",
      paddingBottom: "0.5em",
    },
    button: {
      width: "2.5em",
      height: "2.5em",
      border: "none",
      borderRadius: "1.25em",
      background: color.fontGrey,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 0,
    },
  })
);

export default useStyles;
