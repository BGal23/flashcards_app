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
      display: "flex",
      flexDirection: "column",
      gap: "0.6em",
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
    bottomWrapper: {
      position: "fixed",
      height: 160,
      width: 200,
      opacity: 0.7,
      display: "flex",
      flexDirection: "column",
      alignItems: "start",

      marginLeft: "1em",
      color: color.fontBlack,
      gap: "2em",
      bottom: -160,
      transition: "transform 500ms ease",
    },
    iconWrapper: {
      color: color.fontBlack,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "0.5em",
    },
    openButton: {
      background: color.input,
      opacity: 0.7,
      border: `1px solid ${color.fontBlack}`,
      position: "fixed",
      height: "4em",
      width: "4em",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "2em",
      bottom: 20,
      right: 20,
    },
  })
);

export default useStyles;
