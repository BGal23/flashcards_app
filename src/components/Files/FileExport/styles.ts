import { createStyles, makeStyles } from "@mui/styles";
import color from "../../../assets/colors";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      margin: "0.5em 1em 0",
      width: "calc(100% - 4em)",
      minHeight: "calc(200px - 2em)",
      background: color.input,
      borderRadius: 10,
      boxShadow: `0.2em 0.3em 0px 0px ${color.shadow}`,
      color: color.fontBlack,
      padding: "1em",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "0.5em",
    },
    title: {
      margin: 5,
      fontSize: "1.4em",
    },
    text: {
      margin: "5px 0 5px",
      textAlign: "center",
    },
    buttonWrapper: {
      marginTop: "1em",
      display: "flex",
      justifyContent: "center",
      width: "100%",
    },
    button: {
      color: color.fontBlack,
      background: color.headerButton,
      padding: "0.5em",
      border: "none",
      borderRadius: 10,
      boxShadow: `0.2em 0.3em 0px 0px ${color.shadow}`,
      fontSize: "0.9em",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "0.5em",
    },
  })
);

export default useStyles;
