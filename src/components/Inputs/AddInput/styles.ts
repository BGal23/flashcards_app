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
      margin: "0 1em 0",
      padding: "0 0 0 1em",
      height: "3em",
      borderRadius: "2em",
      border: "none",
      boxShadow: `0.15em 0.3em 0px 0px ${color.shadow}`,
    },
    textarea: {
      margin: "0 1em 0",
      padding: "1em",
      height: "5em",
      borderRadius: "2em",
      border: "none",
      boxShadow: `0.15em 0.3em 0px 0px ${color.shadow}`,
    },
    errorWrapper: {
      position: "relative",
      bottom: "1em",
      height: "1em",
      marginBottom: "-1em",
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
    },
  })
);

export default useStyles;
