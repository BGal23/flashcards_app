import { createStyles, makeStyles } from "@mui/styles";
import color from "../../../assets/colors";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "0.5em",
    },
    input: {
      padding: "0 0 0 1em",
      height: "2em",
      borderRadius: "1em",
      border: "none",
      boxShadow: `0.15em 0.3em 0px 0px ${color.shadow}`,
      width: "100%",
    },
    inputWrapper: {
      margin: "0 1em 0",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "calc(100% - 2em)",
      gap: "0.2em",
    },
    textarea: {
      margin: "0 1em 0",
      padding: "1em",
      height: "5em",
      borderRadius: "1.5em",
      border: "none",
      boxShadow: `0.15em 0.3em 0px 0px ${color.shadow}`,
      fontSize: "medium",
      resize: "none",
    },
    errorWrapper: {
      position: "relative",
      bottom: "2em",
      left: "13em",
      width: "calc(100% - 13em)",
      marginBottom: "-1.9em",
      display: "flex",
      justifyContent: "end",
    },
    error: {
      height: "100%",
      color: color.fontWhite,
      padding: "0.3em 1em 0.3em",
      background: color.error,
      borderRadius: "1em",
      boxShadow: `0.1em 0.2em 0px 0px ${color.shadow}`,
      fontSize: "0.8em",
    },
  })
);

export default useStyles;
