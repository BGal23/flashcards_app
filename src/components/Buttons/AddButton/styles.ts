import { createStyles, makeStyles } from "@mui/styles";
import color from "../../../assets/colors";

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      color: "black",
      height: "3em",
      border: "none",
      paddingLeft: "1em",
      background: color.headerButton,
      boxShadow: `0.15em 0.3em 0px 0px ${color.shadow}`,
      borderRadius: "2em",
      display: "flex",
      alignItems: "center",
      transition: "background 0.2s ease",
      gap: "0.5em",
    },
    buttonWrapper: {
      margin: "0 1em 0 ",
      width: "calc(100% - 2em)",
      display: "flex",
      justifyContent: "end",
    },
    error: {
      height: "100%",
      color: color.fontWhite,
      padding: "0.3em 0.7em 0.3em",
      background: color.error,
      borderRadius: "1em",
      boxShadow: `0.1em 0.2em 0px 0px ${color.shadow}`,
      marginRight: "1em",
    },
    susses: {
      color: color.headerButton,
      fontWeight: 600,
      fontSize: "1.3em",
      marginRight: "1em",
    },
  })
);

export default useStyles;
