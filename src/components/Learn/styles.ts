import { createStyles, makeStyles } from "@mui/styles";
import color from "../../assets/colors";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      margin: "1em 0.5em 1em",
      display: "flex",
      flexDirection: "column",
    },
    mainWord: {
      width: "100%",
      textAlign: "center",
      fontSize: "2em",
      marginBottom: "0.5em",
      color: color.fontBlack,
    },
    buttonsWrapper: {
      display: "flex",
      justifyContent: "space-between",
    },
    description: {
      margin: "0 1em 0",
      textAlign: "center",
      fontStyle: "italic",
      color: color.fontBlack,
    },
    addButton: {
      border: "none",
      padding: "0.3em 0.4em 0.3em 0.8em",
      background: color.headerButton,
      boxShadow: `0.15em 0.3em 0px 0px ${color.shadow}`,
      borderRadius: "2em",
      display: "flex",
      alignItems: "center",
      gap: "0.5em",
      fontSize: "1em",
      marginRight: "1em",
      color: color.fontBlack,
    },
  })
);

export default useStyles;
