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
    addInfoWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5em",
      margin: "0.5em 0 1em",
      fontSize: "1.7em",
      color: color.fontBlack,
    },
    addIcon: {
      height: "3em",
      width: "3em",
      border: "none",
      background: color.headerButton,
      boxShadow: `0.15em 0.3em 0px 0px ${color.shadow}`,
      borderRadius: "0.5em",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

export default useStyles;
