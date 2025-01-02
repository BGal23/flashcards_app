import { createStyles, makeStyles } from "@mui/styles";
import color from "../../../assets/colors";

const useStyles = makeStyles(() =>
  createStyles({
    button: {
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
    buttonWrapper: {
      display: "flex",
      justifyContent: "end",
    },
    error: {
      maxWidth: "calc(100vw - 2em)",
      position: "absolute",
      display: "block",
      top: "50%",
      color: color.fontWhite,
      padding: "0.3em 0.7em 0.3em",
      background: color.error,
      borderRadius: "1em",
      boxShadow: `0.1em 0.2em 0px 0px ${color.shadow}`,
      fontSize: "1.2em",
      transition: "background 0.2s ease",
    },
  })
);

export default useStyles;
